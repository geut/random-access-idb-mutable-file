// flow-typed signature: 4861611f56674d9329b04037c5b5cf44
// flow-typed version: <<STUB>>/random-access-storage_v1.3.0/flow_v0.75.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'random-access-storage'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module "random-access-storage" {
  declare export interface RandomAccessProvider {
    openReadonly?: OpenRequest => void;
    open?: OpenRequest => void;
    read?: ReadRequest => void;
    write?: WriteRequest => void;
    del?: DeleteRequest => void;
    stat?: StatRequest => void;
    close?: CloseRequest => void;
    destroy?: DestroyRequest => void;
  }

  declare interface Callback<x, a = void> {
    (error: x): void;
    (null | void, a): void;
  }

  declare interface AbstractRequest<x, a = void> {
    callback: Callback<x, a>;
  }

  declare export interface OpenRequest extends AbstractRequest<Error> {
    type: 0;
    preferReadonly: boolean;
  }

  declare export interface ReadRequest extends AbstractRequest<Error, Buffer> {
    type: 1;
    data: ?Buffer;
    offset: number;
    size: number;
  }

  declare export interface WriteRequest extends AbstractRequest<Error, void> {
    type: 2;
    data: Buffer;
    offset: number;
    size: number;
  }

  declare export interface DeleteRequest extends AbstractRequest<Error> {
    type: 3;
    offset: number;
    size: number;
  }

  declare export interface StatRequest extends AbstractRequest<Error, Stat> {
    type: 4;
  }

  declare export interface CloseRequest extends AbstractRequest<Error> {
    type: 5;
  }

  declare export interface DestroyRequest extends AbstractRequest<Error> {
    type: 6;
  }

  declare export type Request =
    | OpenRequest
    | ReadRequest
    | WriteRequest
    | DeleteRequest
    | StatRequest
    | CloseRequest
    | DestroyRequest

  declare export type Stat = {
    size: number
  }

  declare export default class RandomAccess {
    +readable: boolean;
    +writable: boolean;
    +deletable: boolean;
    +statable: boolean;
    +opened: boolean;
    +closed: boolean;
    +destroyed: boolean;

    constructor(options?: RandomAccessProvider): void;

    open(Callback<Error>): void;
    +_openReadonly: OpenRequest => void;
    +_open: OpenRequest => void;

    read(offset: number, size: number, Callback<Error, Buffer>): void;
    +_read: ReadRequest => void;

    write(offset: number, buffer: Uint8Array, callback?: Callback<Error>): void;
    +_write: WriteRequest => void;

    del(offset: number, size: number, callback?: Callback<Error>): void;
    +_del: DeleteRequest => void;

    stat(Callback<Error, Stat>): void;
    +_stat: StatRequest => void;

    close(callback: ?Callback<Error>): void;
    +_close: CloseRequest => void;

    destroy(callback: ?Callback<Error>): void;
    +_destroy: DestroyRequest => void;
  }
}
