// get input string - note the split chars
var input = `179	2358	5197	867	163	4418	3135	5049	187	166	4682	5080	5541	172	4294	1397
2637	136	3222	591	2593	1982	4506	195	4396	3741	2373	157	4533	3864	4159	142
1049	1163	1128	193	1008	142	169	168	165	310	1054	104	1100	761	406	173
200	53	222	227	218	51	188	45	98	194	189	42	50	105	46	176
299	2521	216	2080	2068	2681	2376	220	1339	244	605	1598	2161	822	387	268
1043	1409	637	1560	970	69	832	87	78	1391	1558	75	1643	655	1398	1193
90	649	858	2496	1555	2618	2302	119	2675	131	1816	2356	2480	603	65	128
2461	5099	168	4468	5371	2076	223	1178	194	5639	890	5575	1258	5591	6125	226
204	205	2797	2452	2568	2777	1542	1586	241	836	3202	2495	197	2960	240	2880
560	96	336	627	546	241	191	94	368	528	298	78	76	123	240	563
818	973	1422	244	1263	200	1220	208	1143	627	609	274	130	961	685	1318
1680	1174	1803	169	450	134	3799	161	2101	3675	133	4117	3574	4328	3630	4186
1870	3494	837	115	1864	3626	24	116	2548	1225	3545	676	128	1869	3161	109
890	53	778	68	65	784	261	682	563	781	360	382	790	313	785	71
125	454	110	103	615	141	562	199	340	80	500	473	221	573	108	536
1311	64	77	1328	1344	1248	1522	51	978	1535	1142	390	81	409	68	352`;

/*var input = `5 9 2 8
9 4 7 3
3 8 6 5`;
*/


// first split input into a bunch of single line arrays

var linedArray = input.split('\n');
var thisLineCount;
//console.log(linedArray);
var splitChar;
var thisInteger;
var checkSum = 0;
var integerA;
var integerB;

// set splitChar to appropriate char - example is different to real input - tabs/spaces
splitChar = '\t';
//splitChar = ' ';


// outer loop, run through the lines
for (var i=0; i<linedArray.length; i++) {
    console.log(`. . . Line ${i} . . .`);
    // beginning the line count
    // now split the individual line by the tab char
    var thisLineArray = linedArray[i].split(splitChar);
    //console.log(thisLineArray);
    // set the comparators to the first entry

    for (var innerLoop=0; innerLoop<thisLineArray.length; innerLoop++) {
        // now run through the figures on this line

        console.log(`${integerA}/${integerB}`);
        // now cross ref the line against the first innerLoop
        for (var secondLoop = 0; secondLoop<thisLineArray.length; secondLoop++) {
        integerA = parseInt(thisLineArray[innerLoop]);
        integerB = parseInt(thisLineArray[secondLoop]);

            if ((parseInt(integerA/integerB) === (integerA/integerB)) && (integerA/integerB >=1) && (innerLoop != secondLoop)) {
                console.log(`A ${integerA} - B ${integerB} - SUM = ${integerB}`);
                checkSum = checkSum + (integerA/integerB);
            }
                
            
        }
        // end secondloop
    }
// end of this line



}

// end and checksum
console.log(`------------------------`);
console.log(`Finished.  The checkSum is ${checkSum}`);