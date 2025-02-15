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
/**
 * @param restruct { ReStruct }
 * @param _events { Array<PipelineSubscription> }
 * @param bid { number }
 * @param template {{
 * 		molecule: Struct,
 * 		bid: number
 *  }}
 * @param simpleFusing { Function }
 * @returns { Promise }
 */
export declare function fromAromaticTemplateOnBond(restruct: any, template: any, bid: any, _events: any, simpleFusing: any): Promise<any>;
