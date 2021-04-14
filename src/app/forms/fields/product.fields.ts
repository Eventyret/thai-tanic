import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root',
})
export class ProductFieldFormsConfig {
  fields: FormlyFieldConfig[] = [];
  constructor() {
    this.fields = [
      {
        fieldGroup: [
          {
            key: 'title',
            type: 'input',
            templateOptions: {
              type: 'text',
              placeholder: 'Title',
              required: true,
            },
          },
          {
            key: 'description',
            type: 'textarea',
            templateOptions: {
              placeholder: 'Description',
              required: true,
            },
          },
          {
            key: 'price',
            type: 'input',
            templateOptions: {
              type: 'number',
              placeholder: 'Price',
              required: true,
            },
          },
          {
            key: 'category',
            type: 'select',
            templateOptions: {
              label: 'Select Category',
              placeholder: 'Category',
              required: true,
              options: [
                { value: 'soup', label: 'Soup' },
                { value: 'salad', label: 'Salad' },
                { value: 'curry', label: 'Curry' },
                { value: 'noodles', label: 'Noodles' },
                { value: 'rice', label: 'Rice' },
              ],
            },
          },
          {
            key: 'image',
            type: 'input',
            templateOptions: {
              type: 'text',
              placeholder: 'Image URL',
              required: true,
            },
          },
        ],
      },
    ];
  }
}
