const fs = require("fs").promises;

async function writeFile() {
    try {
        await fs.writeFile("promises.txt", "hello students");
        console.log("file created and data written successfully");
    } catch (error) {
        console.log("error:", error)
    }
}
writeFile();
// read file
async function readfile() {
    try{
        const data=await fs.readFile("promises.txt","utf8");
        console.log("file content");
        console.log(data);
    }catch(error){
        console.error("error:",error);
    }
}
readfile();