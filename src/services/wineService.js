export default {
    wineSelect: () => {
        console.log('export default');
    }
    ,
    clickPrevious: (param) => {
        console.log(param);
        let queryObjects = [];
        let queriesArray = param.search.split("&");
        let link = param.pathname + "?";
        queriesArray[0] = queriesArray[0].slice(1);

        for (let element of queriesArray) {
            let query = element.split("=");
            if(query[0] === "page") {
                query[1] = String(Number(query[1]) - 1);
            }
            queryObjects.push({key:query[0], value:query[1]});
            // link = link + query[0] + "=" + query[1];
        }

        for (let i = 0; i < queryObjects.length; i++) {
            if(i === 0) {
                link = link + queryObjects[i].key + "=" + queryObjects[i].value;
            } else {
                link = link + "&" + queryObjects[i].key + "=" + queryObjects[i].value;
            }   
        }

        console.log("query: " , queryObjects);
        console.log("link: " + link );
        const result = {
            link: param.location
        }
        return result
    }
    ,
    clickNext: (param) => {
        console.log(param);
        let queryObjects = [];
        let queriesArray = param.search.split("&");
        let link = param.pathname + "?";
        queriesArray[0] = queriesArray[0].slice(1);

        for (let element of queriesArray) {
            let query = element.split("=");
            if(query[0] === "page") {
                query[1] = String(Number(query[1]) + 1);
            }
            queryObjects.push({key:query[0], value:query[1]});
            // link = link + query[0] + "=" + query[1];
        }

        for (let i = 0; i < queryObjects.length; i++) {
            if(i === 0) {
                link = link + queryObjects[i].key + "=" + queryObjects[i].value;
            } else {
                link = link + "&" + queryObjects[i].key + "=" + queryObjects[i].value;
            }   
        }

        console.log("query: " , queryObjects);
        console.log("link: " + link );
        const result = {
            link: param.location
        }
        return result
    }
        
}
