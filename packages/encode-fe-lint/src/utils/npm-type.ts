import { sync as commandExists } from 'command-exists';

const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve, reject) => {
    if(!commandExists('pnpm')){
        resolve('npm');
    }
    resolve('pnpm');
});

export default promise;