import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanMetaData } from './Boolean/router-data';
import { NumbersMetaData } from './Numbers/router-data';
import { ExerciseObjectsArraysMetaData } from './Exercise-js-objects/router-data';
import { StringMethodsMetaData } from './String-methods/router-data';
import { JsObjectBasicsMetaData } from './Js-objects-basics/router-data';
import { DateTimeBasicsMetaData } from './Date-time/router-data';
import { JsFunctionsBasicsMetaData } from './Functions/router-data';
import { JsHoistingMetaData } from './Hoisting/router-data';
import { ExerciseJsFunctionsMetaData } from './ExerciseJsFunctions/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanMetaData,
  NumbersMetaData,
  ExerciseObjectsArraysMetaData,
  StringMethodsMetaData,
  JsObjectBasicsMetaData,
  DateTimeBasicsMetaData,
  JsFunctionsBasicsMetaData,
  JsHoistingMetaData,
  ExerciseJsFunctionsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
