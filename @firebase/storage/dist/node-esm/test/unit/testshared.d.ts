import { FirebaseApp } from '@firebase/app-types';
import { StorageError } from '../../src/implementation/error';
import { Headers, Connection, ConnectionType } from '../../src/implementation/connection';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { Provider } from '@firebase/component';
import { AppCheckInternalComponentName } from '@firebase/app-check-interop-types';
import { FirebaseStorageImpl } from '../../src/service';
import { Metadata } from '../../src/metadata';
export declare const authToken = "totally-legit-auth-token";
export declare const appCheckToken = "totally-shady-token";
export declare const bucket = "mybucket";
export declare const fakeApp: FirebaseApp;
export declare const fakeAuthProvider: Provider<"auth-internal">;
export declare const emptyAuthProvider: Provider<"auth-internal">;
export declare const fakeAppCheckTokenProvider: Provider<"app-check-internal">;
export declare function makeFakeApp(bucketArg?: string): FirebaseApp;
export declare function makeFakeAuthProvider(token: {
    accessToken: string;
}): Provider<FirebaseAuthInternalName>;
export declare function makeFakeAppCheckProvider(tokenResult: {
    token: string;
}): Provider<AppCheckInternalComponentName>;
/**
 * Returns something that looks like an fbs.XhrIo with the given headers
 * and status.
 */
export declare function fakeXhrIo<I extends ConnectionType = string>(headers: Headers, status?: number): Connection<I>;
/**
 * Binds ignoring types. Used to test calls involving improper arguments.
 */
export declare function bind(f: Function, ctx: any, ...args: any[]): () => void;
export declare function assertThrows(f: () => void, code: string): StorageError;
export declare function assertUint8ArrayEquals(arr1: Uint8Array, arr2: Uint8Array): void;
export declare function assertObjectIncludes(included: {
    [name: string]: any;
}, obj: {
    [name: string]: any;
}): void;
interface Response {
    status: number;
    body: string;
    headers: Headers;
}
declare type RequestHandler = (url: string, method: string, body?: ArrayBufferView | Blob | string | null, headers?: Headers) => Response;
export declare function storageServiceWithHandler(handler: RequestHandler): FirebaseStorageImpl;
export declare function fakeServerHandler(fakeMetadata?: Partial<Metadata>): RequestHandler;
export {};
