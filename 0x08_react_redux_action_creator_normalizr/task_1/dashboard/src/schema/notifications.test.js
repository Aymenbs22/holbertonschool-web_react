import { shallow } from 'enzyme';
import getAllNotificationsByUser from './notifications';
import normalized from './notifications';


describe('NotificationItem', () => {
  it('test that uses the id 5debd764a7c57c7839d722e9 and verifies that the following data is returned', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedNotifications = [
        [
            {
              guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
              isRead: true,
              type: "urgent",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            },
            {
              guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
              isRead: false,
              type: "urgent",
              value:
                "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
            }
          ]];
          testfunc = getAllNotificationsByUser(userId);
          expect(testfunc).toEqual(arrayContaining(expectedNotifications));

  });

  it('verify that your normalized data has a correct result array. It should contain', () => {
    const resultdata = [
        [
          "5debd76480edafc8af244228",
          "5debd764507712e7a1307303",
          "5debd76444dd4dafea89d53b",
          "5debd76485ee4dfd1284f97b",
          "5debd7644e561e022d66e61a",
          "5debd7644aaed86c97bf9d5e",
          "5debd76413f0d5e5429c28a0",
          "5debd7642e815cd350407777",
          "5debd764c1127bc5a490a4d0",
          "5debd7646ef31e0861ec1cab",
          "5debd764a4f11eabef05a81d",
          "5debd764af0fdd1fc815ad9b",
          "5debd76468cb5b277fd125f4",
          "5debd764de9fa684468cdc0b"
          ]];

          const normalized = normalized(resultdata);
          expect(normalized).toEqual(resultdata);
  });
  it('verify that your normalized data has a correct users entity. Test to access the user with the id 5debd764a7c57c7839d722e9. It should return', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const resultdata = 
        {
          age: 25,
          email: "poole.sanders@holberton.nz",
          id: "5debd764a7c57c7839d722e9",
          name: { first: "Poole", last: "Sanders" },
          picture: "http://placehold.it/32x32"
        };
          const user = resultdata.entities.users[userId];
          expect(user).toEqual(arrayContaining(resultdata));
  });
  it('verify that your normalized data has a correct messages entity. Test to access the message with the guid efb6c485-00f7-4fdf-97cc-5e12d14d6c41.', () => {
    const userId = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
    const resultdata = 
        {
          guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
          isRead: false,
          type: "default",
          value: "Cursus risus at ultrices mi."
        };
          const user = resultdata.entities.users[userId];
          expect(user).toEqual(arrayContaining(resultdata));
  });
  it('verify that your normalized data has a correct notifications entity. Test to access the notification with the id 5debd7642e815cd350407777', () => {
    const userId = '5debd7642e815cd350407777';
    const resultdata = 
        {
          author: "5debd764f8452ef92346c772",
          context: "3068c575-d619-40af-bf12-dece1ee18dd3",
          id: "5debd7642e815cd350407777"
        };
          const user = resultdata.entities.users[userId];
          expect(user).toEqual(arrayContaining(resultdata));
  });
});