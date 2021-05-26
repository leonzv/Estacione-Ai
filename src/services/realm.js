import Realm from 'realm';

import dadosSchema from '../schemas/dadosSchema';

export default function getRealm() {
  return Realm.open({
    schema: [dadosSchema],
  });
}