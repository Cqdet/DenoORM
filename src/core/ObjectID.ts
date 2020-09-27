/**
 * Based off:
 * https://github.com/mongodb/js-bson/blob/7f5f1a38d99d1d50b8bf261cc72916f5bce506ae/src/objectid.ts#L37
 */

import Buffer from 'https://deno.land/std@0.71.0/node/buffer.ts';

export interface ObjectIdLike {
	id: string | Buffer;
	__id?: string;
	toHexString(): string;
}

export interface ObjectIdExtended {
	$oid: string;
}

export default class ObjectID {}
