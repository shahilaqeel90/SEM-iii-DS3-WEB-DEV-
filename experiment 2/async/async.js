const fs=require('fs');
// fs.writeFile(
//     'sample.txt','welcome to full stack development',(err)=>{
//         if(err){
//             console.log('error creating file',(err));
//         }else{

        
//         console.log('file created successfully');
//     }
//  }
// )
// fs.readFile('sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.log('error  reading file:',err);
//         return;
//     }
//     else{
//         console.log('file content:');
//         console.log(data);
//     }

// })
// // append
// fs.appendFile('sample.txt','\nsemester:3',(err)=>{
//     if(err){
//         console.log('error updating file',err);
//     }else{
//         console.log('\n3.file updated successfully');
//     }
// })
fs.writeFile(
    'sample.txt1','welcome to full stack development',(err)=>{
        if(err){
            console.log('error creating file',(err));
        }else{

        
        console.log('file created successfully');
    }
 }
)
fs.unlink('example.txt',(err)=>{
    if(err){
        console.error('Error deleting file : ',err);
    }else{
        console.log('\n4. file deleted successsfully !');
    }
})