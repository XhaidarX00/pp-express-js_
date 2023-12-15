// const sqlite = require('sqlite');
// module.exports = {
//     fetchData: async function() {
//         const db = await sqlite.open({
//             filename: 'example.db',
//             driver: require('sqlite3').Database,
//         });

//         const rows = await db.all('SELECT * FROM skill');

//         await db.close();

//         return rows;
//     },
//     insertData: async function(skillName, level) {
//         const db = await sqlite.open({
//             filename: 'example.db',
//             driver: require('sqlite3').Database,
//         });

//         await db.run('INSERT INTO skill (skillName, level) VALUES (?, ?)', [skillName, level]);

//         await db.close();
//     }
// }



const sqlite = require('sqlite');

module.exports = {
    fetchData: async function() {
        const db = await sqlite.open({
            filename: 'example.db',
            driver: require('sqlite3').Database,
        });

        const rows = await db.all('SELECT * FROM skill');

        await db.close();

        return rows;
    },

    insertData: async function(skillName, level) {
        const db = await sqlite.open({
            filename: 'example.db',
            driver: require('sqlite3').Database,
        });

        await db.run('INSERT INTO skill (skillName, level) VALUES (?, ?)', [skillName, level]);

        await db.close();
    },

    updateData: async function(skillId, skillName, level) {
        const db = await sqlite.open({
            filename: 'example.db',
            driver: require('sqlite3').Database,
        });

        await db.run('UPDATE skill SET skillName = ?, level = ? WHERE id = ?', [skillName, level, skillId]);

        await db.close();
    },

    deleteData: async function(skillId) {
        const db = await sqlite.open({
            filename: 'example.db',
            driver: require('sqlite3').Database,
        });

        await db.run('DELETE FROM skill WHERE id = ?', [skillId]);

        await db.close();
    },

    deleteAllData: async function() {
        const db = await sqlite.open({
            filename: 'example.db',
            driver: require('sqlite3').Database,
        });

        await db.run('DELETE FROM skill');

        await db.close();
    }
};



// // Panggil fungsi updateData
// await updateData(1, 'NewSkillName', 'Advanced');

// // Panggil fungsi deleteData
// await deleteData(2);