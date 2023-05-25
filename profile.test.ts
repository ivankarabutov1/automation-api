/* написать один дискрайб с максимальным количеством проверок которые я могу придумать */
import {Profiles} from './sum'



describe('first', () => {


    test('adds 1 + 2 to equal 3', () => {
        let profile=new Profiles();
      profile.addProfile({firstName:'John', secondName:'Sirko', age: 24});
      expect(profile._profiles[0].firstName).toBe('John');
      expect(profile._profiles[0].secondName).toBe('Sirko');
      expect(profile._profiles[0].age).toBe(24);
    });
    
  });