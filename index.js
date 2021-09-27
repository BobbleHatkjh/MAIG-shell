#!/usr/bin/env node

const exec = require('child_process').exec
const ENV = require('./package.json')

// 核心模块npm包名
const coreAdr = 'maig' 
// 核心模块npm版本号
const edition = '0.2.3'


const run = (para) => {

    // 查询版本
    if (['-v', '-V', 'version'].indexOf(para[0]) !== -1) {
        console.log(`\n   ╭───────────────────────────────────────────╮\n   │                                           │\n   │         maig-cli version is ${ENV.version}         │\n   │           maig version is ${edition}           │\n   │                                           │\n   ╰───────────────────────────────────────────╯\n`);
    }

    // 生成demo
    if (para[0] === 'demo' || (para[0] === 'create' && para[1] === 'demo' )) {
        console.log('这里生成一份demo')
    }

    // 构建脚手架
    if (para[0] === 'create') {
        console.log('脚手架搭建');
        //在nodejs中执行shell命令，第一个参数是命令，第二个是具体的回调函数
        exec('npm install ' + coreAdr + '@' + edition + ' && maig init', (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                process.exit();
            }
            console.log('MAIG脚手架已经搭建成功');
            process.exit();
        })
    }

    // 直接生成执行文件
    if (para[0] === 'init') { 
        console.log('生成文件中...');
        //在nodejs中执行shell命令，第一个参数是命令，第二个是具体的回调函数
        exec('node node_modules/' + coreAdr + '/libs/gen.js', (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                process.exit();
            }
            console.log('接口已封装完毕')
            process.exit();
        })
    }

    // 打包
    if (para[0] === 'build') {

    }

};

// 捕获命令
// console.log(process.argv);
run(process.argv.slice(2));
