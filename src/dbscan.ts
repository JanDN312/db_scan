import {Distcalcmethods} from "https://deno.land/x/distance_calculator@2.0.0/mod.ts"

export class DBScan{
    getclassifiedPointListEuclidean(inputlist:Array<number[]>, threshold:number, k:number){
        var outputcore:Array<number[]>=[]
        var outputborder:Array<number[]>=[]
        var outputnoise:Array<number[]>=[]
        var dist=new Distcalcmethods()
        //1 get corepoints
        for (let i = 0; i < inputlist.length; i++){
            var neighbours=0
            for (let x = 0; x < inputlist.length; x++){
                if(dist.getEuclideanDistance(inputlist[i],inputlist[x])<threshold){
                    neighbours=neighbours+1
                }
            }
            if(neighbours>k){
                outputcore.push(inputlist[i])
            }
        }
        for (let i = 0; i < outputcore.length; i++){
            inputlist=inputlist.filter(item => item != outputcore[i])
        }
        //2 get borderpoints and noisepoints
        for (let i = 0; i < inputlist.length; i++){
            var neighbours=0
            for (let x = 0; x < outputcore.length; x++){
                if(dist.getEuclideanDistance(inputlist[i],outputcore[x])<threshold){
                    neighbours=neighbours+1
                }
            }
            if(neighbours==0){
                outputnoise.push(inputlist[i])
            }else{outputborder.push(inputlist[i])}
        }
        return [outputcore, outputborder, outputnoise]
    }
    getclassifiedPointListManhattan(inputlist:Array<number[]>, threshold:number, k:number){
        var outputcore:Array<number[]>=[]
        var outputborder:Array<number[]>=[]
        var outputnoise:Array<number[]>=[]
        var dist=new Distcalcmethods()
        //1 get corepoints
        for (let i = 0; i < inputlist.length; i++){
            var neighbours=0
            for (let x = 0; x < inputlist.length; x++){
                if(dist.getManhattanDistance(inputlist[i],inputlist[x])<threshold){
                    neighbours=neighbours+1
                }
            }
            if(neighbours>k){
                outputcore.push(inputlist[i])
            }
        }
        for (let i = 0; i < outputcore.length; i++){
            inputlist=inputlist.filter(item => item != outputcore[i])
        }
        //2 get borderpoints and noisepoints
        for (let i = 0; i < inputlist.length; i++){
            var neighbours=0
            for (let x = 0; x < outputcore.length; x++){
                if(dist.getManhattanDistance(inputlist[i],outputcore[x])<threshold){
                    neighbours=neighbours+1
                }
            }
            if(neighbours==0){
                outputnoise.push(inputlist[i])
            }else{outputborder.push(inputlist[i])}
        }
        return [outputcore, outputborder, outputnoise]
    }
    getclassifiedPointListMinkowski(inputlist:Array<number[]>, threshold:number, k:number, p:number){
        var outputcore:Array<number[]>=[]
        var outputborder:Array<number[]>=[]
        var outputnoise:Array<number[]>=[]
        var dist=new Distcalcmethods()
        //1 get corepoints
        for (let i = 0; i < inputlist.length; i++){
            var neighbours=0
            for (let x = 0; x < inputlist.length; x++){
                if(dist.getMinkowskiDistance(inputlist[i],inputlist[x],p)<threshold){
                    neighbours=neighbours+1
                }
            }
            if(neighbours>k){
                outputcore.push(inputlist[i])
            }
        }
        for (let i = 0; i < outputcore.length; i++){
            inputlist=inputlist.filter(item => item != outputcore[i])
        }
        //2 get borderpoints and noisepoints
        for (let i = 0; i < inputlist.length; i++){
            var neighbours=0
            for (let x = 0; x < outputcore.length; x++){
                if(dist.getMinkowskiDistance(inputlist[i],outputcore[x],p)<threshold){
                    neighbours=neighbours+1
                }
            }
            if(neighbours==0){
                outputnoise.push(inputlist[i])
            }else{outputborder.push(inputlist[i])}
        }
        return [outputcore, outputborder, outputnoise]
    }
}