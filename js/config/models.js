import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'int',
    faved_on: 'date',
  }
};
export default new Realm({schema: [Fave]});