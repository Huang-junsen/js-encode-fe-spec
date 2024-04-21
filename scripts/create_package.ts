import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

const args = process.argv.slice(2); // 获取传入的参数

const packageName = args[0];
const dirPath = path.join(process.cwd(), 'packages', packageName);
const packageTestFolder = path.join(dirPath, '__tests__');

console.log(dirPath);

init();

async function init() {
    try {
        // 检查并创建主目录
        const wasCreated = await createFolderIfNotExists(dirPath);
        if (!wasCreated) {
            console.log(`目录 ${dirPath} 已存在。`);
            return; // 如果目录已存在，则不继续执行
        }

        // 创建测试目录
        await createFolderIfNotExists(packageTestFolder);
        
        // 在新目录内初始化 npm 包
        execSync(`cd "${dirPath}" && npm init -y`); 
        console.log('成功创建子包');
    } catch (error) {
        console.error('在初始化过程中发生错误:', error);
    }
}

async function createFolderIfNotExists(folderPath: string): Promise<boolean> {
    try {
        const exists = await fs.pathExists(folderPath);
        if (!exists) {
            await fs.ensureDir(folderPath);
            console.log(`已成功创建目录: ${folderPath}`);
            return true;
        }
        return false; // 返回 false 表示目录已存在
    } catch (error) {
        throw new Error(`创建目录 ${folderPath} 时发生错误: ${error}`);
    }
}
