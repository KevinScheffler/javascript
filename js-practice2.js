var nums = [1, 2, 3];

console.log(nums[0], nums[nums.length -1]);

nums[0] = 4;

console.log(nums);

nums.push(5,6);

console.log(nums);

nums[nums.length - 1] = 10;

var lastNum = nums.pop();

console.log(lastNum);

const product = {
    name: 'shiny shoes',
    brand: 'gucci',
    price: '100',
    color: 'black',
    soldOut: false,
}



console.log(`Name: ${product.name}, Brand: ${product.brand}, Price: ${product.price}`);

product.sale = true;
product.tags = ['men', 'luxury'];
product.soldOut = true;

console.log(product);
