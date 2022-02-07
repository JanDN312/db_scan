import {DBScan} from "./src/dbscan.ts"

var dataset:Array<number[]>=[[1,1,1],[1,1,2],[1,2,3],[2,4,3],[2,2,2],[3,2,1],[4,3,2],[2,3,3],[3,3,3],[5,5,5],[5,6,5]]
const dbscan=new DBScan()
console.log(dbscan.getclassifiedPointListEuclidean(dataset,2.1,4))