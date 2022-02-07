import {DBScan} from "https://deno.land/x/db_scan/mod.ts"

var dataset:Array<number[]>=[[1,1,1],[1,1,2],[1,2,3],[2,4,3],[2,2,2],[3,2,1],[4,3,2],[2,3,3],[3,3,3],[5,5,5],[5,6,5]]
const dbscan=new DBScan()
console.log(dbscan.getclassifiedPointListEuclidean(dataset,2.1,4))      //data, threshold, k-neighbours
console.log(dbscan.getclassifiedPointListManhattan(dataset,2.1,4))      //data, threshold, k-neighbours
console.log(dbscan.getclassifiedPointListMinkowski(dataset,2.1,4,3))    //data, threshold, k-neighbours, p from Minkowski-formula