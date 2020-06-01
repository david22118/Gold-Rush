class Matrix {
    constructor(row,colum){
        this.matrix=this.generateMatrix(row,colum)
    }
    generateMatrix(row,colum){
       this.matrix=[]     
        let counter=1
        for(let r=0;r<row;r++){
               let m =[]
            for(let c=0;c<colum;c++){
                m.push(counter++)
            }
            this.matrix.push(m)
        }
       return this.matrix
    }
    print(){
      
        for(let r=0; r<this.matrix.length;r++){
              let line= ""
            for(let c=0;c<this.matrix[r].length;c++){
                line+=(this.matrix[r][c]+"\t") 
            } 
            return line
        }
      
    }
        
    get(row,colum){
      return  this.matrix[row][colum]
    }
    printColumn(colum){
        let line = ""
        for(let r=0 ; r<this.matrix.length;r++){
         line +=this.matrix[r][colum]+","
        }
        console.log(line.substring(0,line.length-1))
    }
    printRow(row){
        let line = ""
        for(let c=0; c<this.matrix[0].length;c++){
           line+= this.matrix[row][c]+","
        }
        console.log(line.substring(0,line.length-1))
    }

    alter(row,colum,number){
        this.matrix[row][colum]=number
    }
    findCoordinate(number){
     for(let r =0; r<this.matrix.length;r++){
         for (let c=0;c<this.matrix[r].length;c++){
             if (this.matrix[r][c]==number){
                return {x:c,y:r}
             }
         }
     }
    }
}

