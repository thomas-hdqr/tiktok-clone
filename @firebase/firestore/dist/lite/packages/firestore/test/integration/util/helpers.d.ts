/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DocumentReference, Firestore, CollectionReference, DocumentData, QuerySnapshot, PrivateSettings, SnapshotListenOptions } from './firebase_export';
export declare function isPersistenceAvailable(): boolean;
declare type ApiSuiteFunction = (message: string, testSuite: (persistence: boolean) => void) => void;
interface ApiDescribe {
    (message: string, testSuite: (persistence: boolean) => void): void;
    skip: ApiSuiteFunction;
    only: ApiSuiteFunction;
}
export declare const apiDescribe: ApiDescribe;
/** Converts the documents in a QuerySnapshot to an array with the data of each document. */
export declare function toDataArray(docSet: QuerySnapshot): DocumentData[];
/** Converts the changes in a QuerySnapshot to an array with the data of each document. */
export declare function toChangesArray(docSet: QuerySnapshot, options?: SnapshotListenOptions): DocumentData[];
export declare function toDataMap(docSet: QuerySnapshot): {
    [field: string]: DocumentData;
};
/** Converts a DocumentSet to an array with the id of each document */
export declare function toIds(docSet: QuerySnapshot): string[];
export declare function withTestDb(persistence: boolean, fn: (db: Firestore) => Promise<void>): Promise<void>;
/** Runs provided fn with a db for an alternate project id. */
export declare function withAlternateTestDb(persistence: boolean, fn: (db: Firestore) => Promise<void>): Promise<void>;
export declare function withTestDbs(persistence: boolean, numDbs: number, fn: (db: Firestore[]) => Promise<void>): Promise<void>;
export declare function withTestDbsSettings(persistence: boolean, projectId: string, settings: PrivateSettings, numDbs: number, fn: (db: Firestore[]) => Promise<void>): Promise<void>;
export declare function withTestDoc(persistence: boolean, fn: (doc: DocumentReference, db: Firestore) => Promise<void>): Promise<void>;
export declare function withTestDocAndSettings(persistence: boolean, settings: PrivateSettings, fn: (doc: DocumentReference) => Promise<void>): Promise<void>;
export declare function withTestDocAndInitialData(persistence: boolean, initialData: DocumentData | null, fn: (doc: DocumentReference, db: Firestore) => Promise<void>): Promise<void>;
export declare function withTestCollection(persistence: boolean, docs: {
    [key: string]: DocumentData;
}, fn: (collection: CollectionReference, db: Firestore) => Promise<void>): Promise<void>;
export declare function withTestCollectionSettings(persistence: boolean, settings: PrivateSettings, docs: {
    [key: string]: DocumentData;
}, fn: (collection: CollectionReference, db: Firestore) => Promise<void>): Promise<void>;
export {};
