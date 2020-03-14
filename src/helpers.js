import { OrderedMap, Map } from "immutable";

export const arrToMap = (array, DataRecord = Map) =>
  array.reduce(
    (acc, item) => acc.set(item.id, new DataRecord(item)),
    new OrderedMap({})
  );

export const mapToArr = obj => obj.valueSeq().toArray();
