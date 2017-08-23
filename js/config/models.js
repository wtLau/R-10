import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'int',
    faved_on: 'date',
  }
};
// adds a Fave object
export const createFave = (faveId) => {
    realm.write(() => {
        realm.create('Fave', {id: faveId, faved_on: new Date().getUnixTime()});
    });
}

// removes a Fave object
export const deleteFave = (faveId) => {
    realm.write(() => {
        let allFave = realm.objects('Fave');    
        let fave = allFave.filtered('id == $0', faveId);
        realm.delete(fave); // delete
    });
}

//   queries the database for all Fave objects
export const queryFave = () => {
    return realm.objects('Fave');
}

const realm = new Realm({schema: [Fave]});

export default realm

