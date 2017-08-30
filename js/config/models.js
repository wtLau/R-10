import Realm from 'realm';

const Fave = {
    name: 'Fave',
    primaryKey: 'id',
    properties: {
        id: 'string',
        faved_on: 'date',
    }
};

const realm = new Realm({schema: [Fave]});

// adds a Fave object
export const createFave = (faveId) => {
    realm.write(() => {
        realm.create('Fave', {id: faveId, faved_on: new Date()}, true);
    });
}

// removes a Fave object
export const deleteFave = (faveId) => {
    realm.write(() => {
        let allFave = realm.objects('Fave');    
        let fave = allFave.filtered('id == $0', faveId);
        realm.delete(fave)
    })
}

//   queries the database for all Fave objects
export const queryFave = () => {
    const query = realm.objects('Fave');
    return query
}

//   queries the database for filtered Fave objects
export const filterFave = (Id) => {
    let singleFave = realm.objects('Fave');
    return singleFave.filtered(Id);
}


export default realm

