import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('users', [
            {
                fname: 'John',
                lname: 'Gilliland',
                uname: 'jgilliland',
                email: 'jgilliland@rndgroup.com',
                isAssigned: false,
                assigneeId: null,
            },
            {
                fname: 'Chris',
                lname: 'Gray',
                uname: 'cgray',
                email: 'cgray@rndgroup.com',
                isAssigned: false,
                assigneeId: null,
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Users', null as any);
    },
};
