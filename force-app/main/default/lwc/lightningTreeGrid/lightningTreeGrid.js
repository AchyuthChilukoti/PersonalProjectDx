import { LightningElement } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC,
    EXAMPLES_DATA_BASIC,
    CX_DATA_BASIC,
    MY_DATA_BASIC,
} from './sampleData';

export default class LightningTreeGrid extends LightningElement {
    // definition of columns for the tree grid
   gridColumns = [
    {
        "label": "Description",
        "fieldName": "MaterialDescription",
        "type": "text"
      },
      {
        "label": "Part Number",
        "fieldName": "Material",
        "type": "text"
      },
      {
        "label": "Serial Number",
        "fieldName": "SerialNumber",
        "type": "text"
      },
      {
        "label": "Quantity",
        "fieldName": "ComponentQuantity",
        "type": "Decimal"
      },
      {
        "label": "Revision Level",
        "fieldName": "RevisionLevel",
        "type": "text"
      },
  ];

    // data provided to the tree grid
   gridData = MY_DATA_BASIC;

   gridColumnsCx = [
    {
      "label": "Description",
      "fieldName": "MaterialDescription",
      "type": "text"
    },
    {
      "label": "Part Number",
      "fieldName": "Material",
      "type": "text"
    },
    {
      "label": "Serial Number",
      "fieldName": "SerialNumber",
      "type": "text"
    },
    {
      "label": "Quantity",
      "fieldName": "ComponentQuantity",
      "type": "number"
    },
    {
      "label": "Revision Level",
      "fieldName": "RevisionLevel",
      "type": "text"
    }
  ];
      gridDataCx = CX_DATA_BASIC;
}
