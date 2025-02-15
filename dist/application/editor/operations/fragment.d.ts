/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { ReStruct } from '../../render';
import { BaseOperation } from './base';
import { StructProperty } from "../../../domain/entities";
declare class FragmentAdd extends BaseOperation {
    frid: any;
    properties?: Array<StructProperty>;
    constructor(fragmentId?: any, properties?: Array<StructProperty>);
    execute(restruct: ReStruct): void;
    invert(): FragmentDelete;
}
declare class FragmentSetProperties extends BaseOperation {
    frid: any;
    properties?: Array<StructProperty>;
    constructor(fragmentId: any, properties?: Array<StructProperty>);
    execute(restruct: ReStruct): void;
    invert(): FragmentSetProperties;
}
declare class FragmentDelete extends BaseOperation {
    frid: any;
    constructor(fragmentId: any);
    execute(restruct: ReStruct): void;
    invert(): FragmentAdd;
}
export { FragmentAdd, FragmentDelete, FragmentSetProperties };
