import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {firstValueFrom, Observable, Subscription, throwError} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'ngx-image-file-input',
  templateUrl: 'ngx-image-file-input.component.html',
  styles: [''],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxImageFileInputComponent),
      multi: true
    }
  ]
})
export class NgxImageFileInputComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  imageUrl?: SafeUrl;

  fileControl = new FormControl();

  @Input()
  alt: string = 'No Image found';

  @ViewChild('fileInput')
  private fileElementRef!: ElementRef<HTMLInputElement>;

  private subscriptions: Subscription[] = [];

  private propagateChange = (_: any) => {};
  private propagateTouch = (_: any) => {};

  constructor(
      private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.fileControl.valueChanges.subscribe(async (data) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(data.dataUrl);
      })
    )
  }

  ngAfterViewInit(): void {
    this.fileElementRef.nativeElement.onchange = async () => {
      if (this.fileElementRef.nativeElement.files === null) {
        this.fileControl.setValue(null);
        this.propagateChange(null);
        this.propagateTouch(null);
        return;
      }

      const file: File = this.fileElementRef.nativeElement.files[0];
      const url = await firstValueFrom(this.loadFileUrl(file));
      const fileData = {
        dataUrl: url,
        filename: file.name,
        size: file.size,
        type: file.type
      };

      this.fileControl.setValue(fileData);
      this.propagateChange(fileData);
      this.propagateTouch(fileData);
    }
  }

  ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  writeValue(img: {
    dataUrl: string,
    filename: string,
    size: number,
    type: string
  }): void {
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(img.dataUrl);
  }

  private loadFileUrl(file: any): Observable<string> {
    if (FileReader && file) {
      const fr = new FileReader();
      const fileContent = new Observable<string>(subscriber => {
        fr.onloadend = () => {
          subscriber.next(String(fr.result));
        };
        fr.onerror = () => {
          subscriber.error(fr.error);
        }
      });
      fr.readAsDataURL(file);

      return fileContent;
    }

    return throwError(() => new Error('FileReader not found'));
  }

}
