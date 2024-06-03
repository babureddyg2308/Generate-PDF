const mongoose = require('mongoose');
const Pdf = require('./src/models/Pdf');
const connectDB = require('./src/config/db');

const seedData = [
    {
        author: 'Jane Austen',
        title: 'Pride and Prejudice',
        content: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'
    },
    {
        author: 'George Orwell',
        title: '1984',
        content: 'It was a bright cold day in April, and the clocks were striking thirteen.'
    },
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        content: 'Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.'
    },
    {
        author: 'F. Scott Fitzgerald',
        title: 'The Great Gatsby',
        content: 'In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.'
    },
    {
        author: 'Mark Twain',
        title: 'The Adventures of Huckleberry Finn',
        content: 'You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter.'
    }
];

const seedDB = async () => {
    await connectDB();
    await Pdf.deleteMany({});
    await Pdf.insertMany(seedData);
    console.log('Data inserted');
    mongoose.connection.close();
};

seedDB().catch(err => console.error(err));
