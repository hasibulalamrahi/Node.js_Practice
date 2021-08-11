//this moodule is generally used to get informations regarding the server 
const os = require('os');
console.log(os.platform()); //will give us the operating sytem path , in our case it is linux
console.log(os.homedir()); //will give us the home directory in this case
console.log(os.freemem()); //will give us the free memory of our systems in bytes 
console.log(os.hostname()); //will give us the hostname that is name of the device
console.log(os.arch()); // will return us the operating system bit / cpu architecture
console.log(os.endianness());
console.log(os.cpus());//will give is the number of cores of our Processor