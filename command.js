#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const { addProduct, findProduct, updateProduct, removeProduct, listProduct} = require('./index');

//Product questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Product name'
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'Product quantity'
    }
]

program
.version('1.0.0')
.description('Product CLI management system')

// program
// .command('add <name> <quantity>')
// .alias('a')
// .description('Add a product')
// .action((name, quantity) => {
//     addProduct({name, quantity});
// });

program
.command('add')
.alias('a')
.description('Add a product')
.action(() => {
    prompt(questions).then(answers => addProduct(answers));
})

program
.command('find <name>')
.alias('f')
.description('Find a product')
.action(name => findProduct(name));

//Update command
program
.command('update <_id>')
.alias('u')
.description('Update product info')
.action((_id)=>{
    prompt(questions).then(answers => updateProduct(_id, answers))
})

//Remove a product
program
.command('remove <_id>')
.alias('r')
.description('Remove a product')
.action(_id => removeProduct(_id));

//List all product
program
.command('list')
.alias('l')
.description('List all product')
.action(() => listProduct());


program.parse(process.argv);