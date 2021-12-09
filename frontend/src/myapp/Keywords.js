import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Menu} from "antd";
import {AppstoreOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import RenderInWindow from "./RenderInWindow";
const {SubMenu} = Menu;
const axios = require("axios")
const _ = {
    "map": require("lodash/map"),
    "forEach": require("lodash/forEach"),
    "mapValues": require("lodash/mapValues"),
    "split": require("lodash/split"),
    "join": require("lodash/join")
}

function Keywords(props) {
    let [keywords, setKeywords] = useState([])
    let [showWindow, setState] = useState(false)
    let [additonalInfo,setAdditionalInfo]=useState({})
    let [pdfInfo,setPdfInfo]=useState({})
    let [keywordData,setKeyWordData]=useState({})
    let [pdfData,setPdfData] = useState({})

    // const fetchKeywords = async (keywordUrl) => {
    //     let proxy_url = "https://cors-anywhere.herokuapp.com/"
    //     const response = await fetch(keywordUrl).then(async (response) => {
    //             const data = await response.json()
    //             let tempData = data['keywords']
    //             console.log("data from api: ",data)
    //             setKeywords(tempData)
    //             console.log("keywords: ",keywords)
    //         }
    //     ).catch((error) => {
    //         console.log(error);
    //     })
    // }

    function fetchKeywords (){
        let keywordFetch="https://312r0suowe.execute-api.us-east-2.amazonaws.com/keywords-stage/getkeywords?week=3"
        const fetchKeywords = axios.get(keywordFetch)

        fetchKeywords.then(res=>{
            let keywordsList =res.data['keywords']
            setKeywords(keywordsList)
            console.log("keywords: ",keywords)
            _.forEach(keywordsList, keyword=>{
                let manUrl = `https://7dbuuwphha.execute-api.us-east-2.amazonaws.com/myDeployment/searchCampusWire?term=${keyword[0]}`
                axios.get(manUrl).then(result=>{
                    let word=_.join(_.split(keyword[0],' '),'_')
                    additonalInfo[keyword[0]]=result.data[word]
                    setAdditionalInfo(additonalInfo)
                    //console.log("\nNew result is", result.data)
                }).catch((error)=> {
                    console.log(error)
                })
                let pdfSearchUrl = `https://ki5xlwpsm9.execute-api.us-east-2.amazonaws.com/pdfdeployment/searchPDFDoc?term=${keyword[0]}`
                axios.get(pdfSearchUrl).then(result=>{
                    let word=_.join(_.split(keyword[0],' '),'_')
                    pdfInfo[keyword[0]]=result.data[word]
                    setPdfInfo(pdfInfo)
                    //console.log("\nNew result is", result.data)
                }).catch((error)=> {
                    console.log(error)
                })


            })
        })
    }

    useEffect(()=> {
        fetchKeywords()
    },[props])


    let handleClick = async e => {
        console.log('keywords clicked ', e);
        //keywordData=additonalInfo[e.key]

        setKeyWordData(additonalInfo[e.key])
        setPdfData(pdfInfo[e.key])
        console.log("Keyword is: ",pdfData)
        setState(!showWindow)
    };

    return (
        <div>
            <h1 style={{fontSize:'30px', width:'300px'}}>
            Additional Info</h1>
            <Menu
                theme="dark"
                onClick={(e)=>handleClick(e)
                }
                style={{width: 400}}
                mode="inline"
            >
                <SubMenu key={"Keywords"} icon={<AppstoreOutlined/>} title={"Keywords"}>
                    {_.map(keywords, keywordItem =>{
                        return(
                            keywordItem==null?null:
                                <Menu.Item key={keywordItem} style={{width: 400}}>
                                    {keywordItem}
                                </Menu.Item>
                        )
                    } )}
                </SubMenu>
            </Menu>

            {showWindow && (
                <RenderInWindow>
                    <div>
                        <h1>Additional Info</h1>
                        {
                            _.map(keywordData, item => <li>
                                <a href={item.url}>{item.title}</a>
                            </li>)
                        }
                        <br/>
                        <h1>University Text Book Reference</h1>
                        {
                            _.map(pdfData, item => <li>
                                <a href={item.url}>{item.pagenumbers}</a>
                            </li>)
                        }


                    </div>
                    <br/>
                    <button onClick={() => setState(!showWindow)}>
                        Close me!
                    </button>
                </RenderInWindow>
            )}
        </div>
    )
}

export default Keywords;