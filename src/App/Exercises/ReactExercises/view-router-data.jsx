import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactOnClickMetaData } from './ReactOnClick/router-data';
import { ReactOnChangeMetaData } from './ReactOnChange/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactGuessNumberMetaData } from './ReactGuessNumber/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { ToDoWithServer2MetaData } from './ToDoWithServer2/router-data';
import { BasicFormsMetaData } from './BasicForms/router-data';
import { BasicFormsReactHookMetaData } from './BasicFormsReactHook/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickMetaData,
  ReactOnChangeMetaData,
  ReactIfStatementsMetaData,
  ReactGuessNumberMetaData,
  HitTheMoleMetaData,
  ToDoWithServerMetaData,
  ToDoWithServer2MetaData,
  BasicFormsMetaData,
  BasicFormsReactHookMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
