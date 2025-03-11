const os = require('os');

// os.platform Tells us about the current operating system.
console.log('Platform:', os.platform()); // Platform: win32

// os.userInfo Returns information about the current user.
console.log('User:', os.userInfo()); // User:

// os.architecture Returns information about the current operating system architecture.
console.log('CPU Architecture:', os.arch()); // CPU Architecture: x64

// os.totalmem Returns the total amount of memory installed on the system.
console.log('Total Memory:', os.totalmem(), 'Bytes'); // Total Memory: 17052069888 Bytes

// os.freemem Returns the amount of free memory available on the system.
console.log('Free Memory:', os.freemem(), 'Bytes'); // Free Memory: 7700762624 Bytes

// os.homedir Returns the home directory of the current user.
console.log('Home Directory:', os.homedir()); // Home Directory: C:\Users\Admin

// os.uptime Returns the system uptime in seconds.
console.log('System UpTime:', os.uptime(), 'Seconds'); // System UpTime: 90196.75 Seconds

// os.hostname Returns the host name of the operating system.
console.log('HostName:', os.hostname()); // Host Name:

// os.networkInterfaces Returns an object containing information about all network interfaces on the system.
console.log('Network Interfaces:', os.networkInterfaces()); // Network Interfaces: {}

// os.cpus Returns an array of objects containing information about each CPU on the system.
console.log('Cpu:', os.cpus()); //

// os.type Returns the operating system name.
console.log('operating system', os.type()); // Operating System:);
