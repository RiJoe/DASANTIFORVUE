<template>
  <div >
  <el-form ref="searchFormRef" :model="searchForm" label-width="80px">
    <el-form-item
      label="企业名称"
    >
      <el-input v-model="searchForm.name" placeholder="请输入企业名称" prefix-icon="el-icon-search">
        <el-button slot="append" icon="el-icon-search" @click="onSubmit"></el-button>
      </el-input>
    </el-form-item>
  </el-form>
  <el-table
    v-loading="loading"
    style="width: 100%"
    :data="tableData"
    :cell-class-name="tableRowClassName"
    highlight-current-row
    :height="tableHeight"
    border
    >
    <el-table-column
      fixed
      type="index"
      width="40">
    </el-table-column>
    <el-table-column
      fixed
      prop="companyName"
      label="企业名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="riskScore"
      label="风险值"
      width="120">
    </el-table-column>
    <el-table-column
      prop="strengthenTraining"
      label="加强培训"
      width="120">
    </el-table-column>
    <el-table-column
      prop="principal"
      label="负责人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="fillName"
      label="填报人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="fillNumber"
      label="填报人电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="employeeNumber"
      label="全员人数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="260">
    </el-table-column>
    <el-table-column
      prop="note"
      label="近三年有无发生一般事故及以上事故"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-tooltip class="item" effect="dark" content="查看该企业风险信息" placement="top-end">
        <el-button @click="handleClick(scope.row)" type="text" size="small" >查看</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="保存该企业文档" placement="top-end">
        <el-button @click="saveXDoc(scope.row)" type="text" size="small">保存</el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
  import Docxtemplater from 'docxtemplater'
  import PizZip from 'pizzip'
  import JSZipUtils from 'jszip-utils'
  import {saveAs} from 'file-saver'
  export default {
    data() {
      return {
        tableHeight: window.innerHeight - 100,
        loading: true,
        searchForm: {
          name: ''
        },
        tableData: [],
        myDetermineFactor: '',
        risk: {
          // 1、重大危险源
          riskLevel: '',
          riskLevel2: '',
          riskLevel3: '',
          riskLevel4: '',
          riskLevel5: '',
          photoOne: '',
          photoTwo: '',
          photoThree: '',
          photoFour: '',
          photoFive: '',
          // 2、特种设备
          guolu: '',
          yalirongqi: '',
          qita: '',
          not: '',
          guoluphoto: '',
          yalirongqiphoto: '',
          qitaphoto: '',
          notphoto: '',
          // 3、危险设施、设备
          jiejingchejian: '',
          shaguagnji: '',
          chongjianyajixie: '',
          kaoxiang: '',
          weixianshebeiwu: '',
          jiejingchejianphoto: '',
          shaguagnjiphoto: '',
          chongjianyajixiephoto: '',
          kaoxiangphoto: '',
          weixianshebeiwuphoto: '',
          // 4、危险化学品
          weixianhuaxuepin: '',
          weixianhuaxuepinwu: '',
          weixianhuaxuepinphoto: '',
          weixianhuaxuepinwuphoto: '',
          // 5、危险工艺
          lvmeifenchen: '',
          qitafenchen: '',
          shean: '',
          youxiankongjian: '',
          penqipenyou: '',
          tucenghonggan: '',
          lilizidianchi: '',
          gaowenrongrong: '',
          shiyongpaifengguandao: '',
          weixiangongyiwu: '',
          lvmeifenchenphoto: '',
          qitafenchenphoto: '',
          sheanphoto: '',
          youxiankongjianphoto: '',
          penqipenyouphoto: '',
          tucenghongganphoto: '',
          lilizidianchiphoto: '',
          gaowenrongrongphoto: '',
          shiyongpaifengguandaophoto: '',
          weixiangongyiwuphoto: '',
          // 6、应急反应
          wuyuanwuyanlian: '',
          youyuanwuyanlian: '',
          youyuanyouyanlian: '',
          wuyuanwuyanlianphoto: '',
          youyuanwuyanlianphoto: '',
          youyuanyouyanlianphoto: '',
          // 7、安全生产标准化
          weidabiao: '',
          dabiaodanjilubuwanshan: '',
          dabiaoqieyouxiaoyunxing: '',
          weidabiaophoto: '',
          dabiaodanjilubuwanshanphoto: '',
          dabiaoqieyouxiaoyunxingphoto: '',
          // 8、隐患自查自报
          youzichazibaobingshangchuandaoxitong: '',
          youzichazibaodanweishangchuan: '',
          weijinxingzichazibao: '',
          youzichazibaobingshangchuandaoxitongphoto: '',
          youzichazibaodanweishangchuanphoto: '',
          weijinxingzichazibaophoto: '',
          // 9、安全教育培训情况
          wusanjipeixun: '',
          yousanjipeixundanbuwanshan:'',
          sanjipeixunwanshan: '',
          wusanjipeixunphoto: '',
          yousanjipeixundanbuwanshanphoto:'',
          sanjipeixunwanshanphoto: '',
          // 10、从业人数
          morethanthreehundred: '',
          onetothreehundred: '',
          threetoonehundred: '',
          lessthanthirty: '',
          employeeNumber: '',

          score: '',
          riskwork: [],
          risksource: [],
        },

        specialEquipment: ''
      }
    },
    mounted () {
      this.getAllEnterprise()
    },
    methods:{
      tableRowClassName({row, column, rowIndex, columnIndex}) {
        if (row.riskScore >= 1000 && columnIndex ===0) return 'danger-row'
        if (1000> row.riskScore && row.riskScore >= 720 && columnIndex ===0) return 'warning-row'
        if (720> row.riskScore && row.riskScore >= 500 && columnIndex ===0) return 'less-danger-row'
        if (500> row.riskScore && row.riskScore >= 300 && columnIndex ===0) return 'no-danger-row'
        if (300> row.riskScore && columnIndex ===0) return 'success-row'
      },
      handleClick(row) {

        this.$router.push({
          path: '/newriskdocx',
          name: 'newRiskDocx',
          query: {
            name: 'riskData',
            dataObj: row
          }
        })
      },
      // 保存下载企业风险DOCX
      saveXDoc(row){
        var ImageModule = require("open-docxtemplater-image-module");
        const https = require("http");
        const Stream = require("stream").Transform;

        //var fs = require("fs");
        //const DocxTemplater = require("docxtemplater");
        //const http = require("http");
        //const Stream = require("stream").Transform;

        // 初始化总分值
        let accidentConsequenceScore = 0;
        let possibilityOfAccidentScore = 0;
        let theNumberOfEmployeesScore = 0;
        row.concreteEvaluationList.forEach((item,index)=>{

          // 1、重大危险源
          if(item.influenceFactorId ===1){
            if (item.determineFactor ==='一级') this.risk.riskLevel = "√",this.risk.photoOne = item.photo.split(',')
            if (item.determineFactor ==='二级') this.risk.riskLevel2 = "√", this.risk.photoTwo = item.photo.split(',')
            if (item.determineFactor ==='三级') this.risk.riskLevel3 = "√",this.risk.photoThree = item.photo.split(',')
            if (item.determineFactor ==='四级') this.risk.riskLevel4 = "√",this.risk.photoFour = item.photo.split(',')
            if (item.determineFactor ==='无') this.risk.riskLevel5 = "√",this.risk.photoFive = item.photo.split(',')
          }
          // 2、特种设备
          if(item.influenceFactorId === 2){
            if(item.determineFactor ==='锅炉')  this.risk.guolu = "√",this.risk.guoluphoto = item.photo.split(',')
            if(item.determineFactor ==='压力容器')  this.risk.yalirongqi = "√",this.risk.yalirongqiphoto = item.photo.split(',')
            if(item.determineFactor ==='其他')  this.risk.qita = "√",this.risk.qitaphoto = item.photo.split(',')
            if(item.determineFactor ==='无')  this.risk.not = "√",this.risk.notphoto = item.photo.split(',')
          }
          // 3、危险设施设备
          if(item.influenceFactorId === 3){
            this.risk.risksource.push(item.determineFactor)
            if(item.determineFactor === "洁净车间") this.risk.jiejingchejian = "√",this.risk.jiejingchejianphoto = item.photo.split(',')
            if(item.determineFactor === "砂光机") this.risk.shaguagnji = "√",this.risk.shaguagnjiphoto = item.photo.split(',')
            if(item.determineFactor === "冲剪压机械") this.risk.chongjianyajixie = "√",this.risk.chongjianyajixiephoto = item.photo.split(',')
            if(item.determineFactor === "烤箱") this.risk.kaoxiang = "√",this.risk.kaoxiangphoto = item.photo.split(',')
            if(item.determineFactor === "无") this.risk.weixianshebeiwu = "√",this.risk.weixianshebeiwuphoto = item.photo.split(',')
          }
          // 4、危险化学品
          if (item.influenceFactorId ===4){
            if(item.determineFactor === "危险化学品") this.risk.weixianhuaxuepin = item.remark,this.risk.weixianhuaxuepinphoto = item.photo.split(',')
            if(item.determineFactor === "无") this.risk.weixianhuaxuepinwu= "√",this.risk.weixianhuaxuepinwuphoto = item.photo.split(',')
          }
          // 5、危险工艺
          if (item.influenceFactorId ===5){
            this.risk.riskwork.push(item.determineFactor)
            if(item.determineFactor === "铝镁粉尘") this.risk.lvmeifenchen = "√",this.risk.lvmeifenchenphoto = item.photo.split(',')
            if(item.determineFactor === "其他粉尘") this.risk.qitafenchen = "√",this.risk.qitafenchenphoto = item.photo.split(',')
            if(item.determineFactor === "涉氨") this.risk.shean = "√",this.risk.sheanphoto = item.photo.split(',')
            if(item.determineFactor === "有限空间") this.risk.youxiankongjian = "√",this.risk.youxiankongjianphoto = item.photo.split(',')
            if(item.determineFactor === "喷漆喷油") this.risk.penqipenyou = "√",this.risk.penqipenyouphoto = item.photo.split(',')
            if(item.determineFactor === "涂层烘干") this.risk.tucenghonggan = "√",this.risk.tucenghongganphoto = item.photo.split(',')
            if(item.determineFactor === "锂离子电池") this.risk.lilizidianchi = "√",this.risk.lilizidianchiphoto = item.photo.split(',')
            if(item.determineFactor === "高温熔融") this.risk.gaowenrongrong = "√",this.risk.gaowenrongrongphoto = item.photo.split(',')
            if(item.determineFactor === "使用排风管道") this.risk.shiyongpaifengguandao = "√",this.risk.shiyongpaifengguandaophoto = item.photo.split(',')
            if(item.determineFactor === "危险工艺无") this.risk.weixiangongyiwu = "√",this.risk.weixiangongyiwuphoto = item.photo.split(',')

          }
          // 6、应急反应
          if(item.influenceFactorId === 6){
            if (item.determineFactor === "无预案无演练") this.risk.wuyuanwuyanlian = "√" , this.risk.wuyuanwuyanlianphoto = item.photo.split(',')
            if (item.determineFactor === "有预案无演练") this.risk.youyuanwuyanlian = "√" , this.risk.youyuanwuyanlianphoto = item.photo.split(',')
            if (item.determineFactor === "有预案有演练") this.risk.youyuanyouyanlian = "√" , this.risk.youyuanyouyanlianphoto = item.photo.split(',')
          }
          // 7、安全生产标准化
          if(item.influenceFactorId === 7){
            if (item.determineFactor === "未达标") this.risk.weidabiao = "√",this.risk.weidabiaophoto = (item.photo||"").split(',')
            if (item.determineFactor === "达标但记录不完善") this.risk.dabiaodanjilubuwanshan = "√",this.risk.dabiaodanjilubuwanshanphoto = (item.photo || "").split(',')
            if (item.determineFactor === "达标且有效运行")  this.risk.dabiaoqieyouxiaoyunxing = "√",this.risk.dabiaoqieyouxiaoyunxingphoto = (item.photo || "").split(',')

          }
          // 8、隐患自查自报
          if(item.influenceFactorId ===8){
            if (item.determineFactor === "有自查自报并上传到系统") this.risk.youzichazibaobingshangchuandaoxitong = "√" ,this.risk.youzichazibaobingshangchuandaoxitongphoto = (item.photo || "").split(',')
            if (item.determineFactor === "有自查自报，但未上传") this.risk.youzichazibaodanweishangchuan = "√", this.risk.youzichazibaodanweishangchuanphoto = (item.photo || "").split(',')
            if (item.determineFactor === "未进行自查自报") this.risk.weijinxingzichazibao = "√", this.risk.weijinxingzichazibaophoto = (item.photo || "").split(',')

          }
          // 9、安全教育培训情况
          if(item.influenceFactorId ===9){
            if (item.determineFactor === "无三级培训") this.risk.wusanjipeixun = "√",this.risk.wusanjipeixunphoto = (item.photo || "").split(',')
            if (item.determineFactor === "有三级培训但不完善") this.risk.yousanjipeixundanbuwanshan = "√",this.risk.yousanjipeixundanbuwanshanphoto = (item.photo || "").split(',')
            if (item.determineFactor === "三级培训完善") this.risk.sanjipeixunwanshan = "√",this.risk.sanjipeixunwanshanphoto = (item.photo || "").split(',')
          }
          // 10、从业人数
          if(item.influenceFactorId ===10){
            if (item.determineFactor === "≥300") this.risk.morethanthreehundred = item.remark
            if (item.determineFactor === "100～300") this.risk.onetothreehundred = item.remark
            if (item.determineFactor === "30～100") this.risk.threetoonehundred = item.remark
            if (item.determineFactor === "<30") this.risk.lessthanthirty = item.remark
          }

          // 事故后果总分
          if (item.categoryId ===1){
            accidentConsequenceScore = accidentConsequenceScore + item.score
          }
          // 事故可能性总分
          if (item.categoryId ===2){
            possibilityOfAccidentScore = possibilityOfAccidentScore + item.score
          }
          // 暴露人数总分
          if (item.categoryId ===3) {
            theNumberOfEmployeesScore = theNumberOfEmployeesScore + item.score
          }
        })
        // 企业风险值
        this.risk.score = accidentConsequenceScore*possibilityOfAccidentScore*theNumberOfEmployeesScore
        let vm = this
        JSZipUtils.getBinaryContent("../../static/risk.docx",function (error,content) {
          if(error){
            throw error;
          }
          /*function base64DataURLToArrayBuffer(dataURL) {

            if(dataURL.length>0){
             //console.log(dataURL)
              let byte = []
              for (let y = 1; y<dataURL.length;y++){
                const base64Regex = /^data:image\/(png|jpeg|jpg|svg|svg\+xml);base64,/;
                if (!base64Regex.test(dataURL[y])) {
                  return false;
                }
                const stringBase64 = dataURL[y].replace(base64Regex, "");
                let binaryString;
                if (typeof window !== "undefined") {
                  binaryString = window.atob(stringBase64);
                } else {
                  binaryString = Buffer.from(stringBase64, "base64").toString("binary");
                }
                const len = binaryString.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) {
                  const ascii = binaryString.charCodeAt(i);
                  bytes[i] = ascii;
                }
                //console.log(bytes.buffer)
                byte.push(bytes.buffer)
                //return bytes.buffer;

              }
              /!*if(byte.length>0){
                console.log(byte)
                return byte
              }*!/
              return byte[0]
            }
          }
          const imageOpts = {
            getImage(tag) {
              return  base64DataURLToArrayBuffer(tag);
            },
            getSize() {
              return [100, 100];
            },
          };*/

          /*var opts = {};
          opts.centered = false;
          opts.getImage = function (tagValue, tagName) {
            return new Promise(function (resolve, reject) {
              JSZipUtils.getBinaryContent(tagValue, function (error, content) {
                if (error) {
                  return reject(error);
                }
                return resolve(content);
              });
            });
          };
          opts.getSize = function (img, tagValue, tagName) {
            // FOR FIXED SIZE IMAGE :
            return [150, 150];

            // FOR IMAGE COMING FROM A URL (IF TAGVALUE IS AN ADDRESS) :
            // To use this feature, you have to be using docxtemplater async
            // (if you are calling setData(), you are not using async).
            /!*return new Promise(function (resolve, reject) {
              var image = new Image();
              image.src = url;
              image.onload = function () {
                resolve([image.width, image.height]);
              };
              image.onerror = function (e) {
                console.log("img, tagValue, tagName : ", img, tagValue, tagName);
                alert("An error occured while loading " + tagValue);
                reject(e);
              };
            });*!/
          };*/

          const opts = {};
          opts.getImage = function (tagValue, tagName) {
            console.log(tagValue, tagName);
            // tagValue is "https://docxtemplater.com/xt-pro-white.png" and tagName is "image"
            return new Promise(function (resolve, reject) {
              getHttpData(tagValue[0], function (err, data) {
                if (err) {
                  return reject(err);
                }
                resolve(data);
              });
            });
          };

          opts.getSize = function (img, tagValue, tagName) {
            // FOR FIXED SIZE IMAGE :
            return [150, 150];

            // FOR IMAGE COMING FROM A URL (IF TAGVALUE IS AN ADDRESS) :
            // To use this feature, you have to be using docxtemplater async
            // (if you are calling setData(), you are not using async).
            return new Promise(function (resolve, reject) {
              var image = new Image();
              image.src = url;
              image.onload = function () {
                resolve([image.width, image.height]);
              };
              image.onerror = function (e) {
                console.log("img, tagValue, tagName : ", img, tagValue, tagName);
                alert("An error occured while loading " + tagValue);
                reject(e);
              };
            });
          };


          let zip = new PizZip(content);
          let doc = new Docxtemplater().loadZip(zip);
          doc.attachModule(new ImageModule(opts));
          doc.compile();
          // 给docx模板赋值
          doc.resolveData({
            "photoOne": vm.risk.photoOne,
            "photoTwo": vm.risk.photoTwo,
            "photo3Three": vm.risk.photoThree,
            "photo4Four": vm.risk.photoFour,
            "photoFive": vm.risk.photoFive,

            "锅炉图片": vm.risk.guoluphoto,
            "压力容器图片": vm.risk.yalirongqiphoto,
            "其他图片": vm.risk.qitaphoto,
            "特种设备无图片": vm.risk.notphoto,

            "洁净车间图片": vm.risk.jiejingchejianphoto,
            "砂光机图片": vm.risk.shaguagnjiphoto,
            "冲剪压机械图片": vm.risk.chongjianyajixiephoto,
            "烤箱图片": vm.risk.kaoxiangphoto,
            "危险设备无图片": vm.risk.weixianshebeiwuphoto,

            "危险化学品图片": vm.risk.weixianhuaxuepinphoto,
            "危险化学品无图片": vm.risk.weixianhuaxuepinwuphoto,

            "铝镁粉尘图片": vm.risk.lvmeifenchenphoto,
            "其他粉尘图片": vm.risk.qitafenchenphoto,
            "涉氨图片": vm.risk.sheanphoto,
            "有限空间图片": vm.risk.youxiankongjianphoto,
            "喷漆喷油图片": vm.risk.penqipenyouphoto,
            "图层烘干图片": vm.risk.tucenghongganphoto,
            "锂离子电池图片": vm.risk.lilizidianchiphoto,
            "高温熔融图片": vm.risk.gaowenrongrongphoto,
            "使用排风管道图片": vm.risk.shiyongpaifengguandaophoto,
            "危险工艺无图片": vm.risk.weixiangongyiwuphoto,

            "无预案无演练图片": vm.risk.wuyuanwuyanlianphoto,
            "有预案无演练图片": vm.risk.youyuanwuyanlianphoto,
            "有预案有演练图片": vm.risk.youyuanyouyanlianphoto,

            "未达标图片": vm.risk.weidabiaophoto,
            "达标但记录不完善图片": vm.risk.dabiaodanjilubuwanshanphoto,
            "达标且有效运行图片": vm.risk.dabiaoqieyouxiaoyunxingphoto,

            "有自查自报并上传到系统图片": vm.risk.youzichazibaobingshangchuandaoxitongphoto,
            "有自查自报，但未上传图片": vm.risk.youzichazibaodanweishangchuanphoto,
            "未进行自查自白图片": vm.risk.weijinxingzichazibaophoto,

            "无三级培训图片": vm.risk.wusanjipeixunphoto,
            "有三及培训但不完善图片": vm.risk.yousanjipeixundanbuwanshanphoto,
            "三级培训完善图片": vm.risk.sanjipeixunwanshanphoto,
          });
          doc.setData({
            // 1、重大危险源
            "一级": vm.risk.riskLevel,
            "二级": vm.risk.riskLevel2,
            "三级": vm.risk.riskLevel3,
            "四级": vm.risk.riskLevel4,
            "无": vm.risk.riskLevel5,

            // 2、特种设备
            "锅炉": vm.risk.guolu,
            "压力容器": vm.risk.yalirongqi,
            "其他": vm.risk.qita,
            "特种设备无": vm.risk.not,

            // 3、危险设施、设备
            "洁净车间": vm.risk.jiejingchejian,
            "砂光机": vm.risk.shaguagnji,
            "冲剪压机械": vm.risk.chongjianyajixie,
            "烤箱": vm.risk.kaoxiang,
            "危险设备无": vm.risk.weixianshebeiwu,

            // 4、危险化学品
            "危险化学品": vm.risk.weixianhuaxuepin,
            "危险化学品无": vm.risk.weixianhuaxuepinwu,

            // 5、危险工艺
            "铝镁粉尘": vm.risk.lvmeifenchen,
            "其他粉尘": vm.risk.qitafenchen,
            "涉氨": vm.risk.shean,
            "有限空间": vm.risk.youxiankongjian,
            "喷漆喷油": vm.risk.penqipenyou,
            "涂层烘干": vm.risk.tucenghonggan,
            "锂离子电池": vm.risk.lilizidianchi,
            "高温熔融": vm.risk.gaowenrongrong,
            "使用排风管道": vm.risk.shiyongpaifengguandao,
            "危险工艺无": vm.risk.weixiangongyiwu,

            // 6、应急反应
            "无预案无演练": vm.risk.wuyuanwuyanlian,
            "有预案无演练": vm.risk.youyuanwuyanlian,
            "有预案有演练": vm.risk.youyuanyouyanlian,

            // 7、安全生产标准化
            "未达标": vm.risk.weidabiao,
            "达标但记录不完善": vm.risk.dabiaodanjilubuwanshan,
            "达标且有效运行": vm.risk.dabiaoqieyouxiaoyunxing,

            // 8、隐患自查自报
            "有自查自报并上传到系统": vm.risk.youzichazibaobingshangchuandaoxitong,
            "有自查自报，但未上传": vm.risk.youzichazibaodanweishangchuan,
            "未进行自查自报": vm.risk.weijinxingzichazibao,

            // 9、安全教育培训情况
            "无三级培训": vm.risk.wusanjipeixun,
            "有三级培训但不完善": vm.risk.yousanjipeixundanbuwanshan,
            "三级培训完善": vm.risk.sanjipeixunwanshan,

            // 10、从业人数
            "≥300": vm.risk.morethanthreehundred,
            "100～300": vm.risk.onetothreehundred,
            "30～100": vm.risk.threetoonehundred,
            "<30": vm.risk.lessthanthirty,

            "单位名称": row.companyName,
            "地址": row.address,
            "经纬度": row.lng + "\n" + row.lat,
            "主要负责人": row.principal,
            "填报人及联系电话": row.fillName + "\n"+row.fillNumber,
            "全员人数": row.employeeNumber,
            "有无发生事故": row.note,
            "风险值": vm.risk.score,
            "主要危险源": row.majorSourceOfDanger,
            "主要风险名称": row.mainRisk,
            "加强培训": row.strengthenTraining,

            "photoOne": vm.risk.photoOne,
            "photoTwo": vm.risk.photoTwo,
            "photo3Three": vm.risk.photoThree,
            "photo4Four": vm.risk.photoFour,
            "photoFive": vm.risk.photoFive,

            "锅炉图片": vm.risk.guoluphoto,
            "压力容器图片": vm.risk.yalirongqiphoto,
            "其他图片": vm.risk.qitaphoto,
            "特种设备无图片": vm.risk.notphoto,

            "洁净车间图片": vm.risk.jiejingchejianphoto,
            "砂光机图片": vm.risk.shaguagnjiphoto,
            "冲剪压机械图片": vm.risk.chongjianyajixiephoto,
            "烤箱图片": vm.risk.kaoxiangphoto,
            "危险设备无图片": vm.risk.weixianshebeiwuphoto,

            "危险化学品图片": vm.risk.weixianhuaxuepinphoto,
            "危险化学品无图片": vm.risk.weixianhuaxuepinwuphoto,

            "铝镁粉尘图片": vm.risk.lvmeifenchenphoto,
            "其他粉尘图片": vm.risk.qitafenchenphoto,
            "涉氨图片": vm.risk.sheanphoto,
            "有限空间图片": vm.risk.youxiankongjianphoto,
            "喷漆喷油图片": vm.risk.penqipenyouphoto,
            "图层烘干图片": vm.risk.tucenghongganphoto,
            "锂离子电池图片": vm.risk.lilizidianchiphoto,
            "高温熔融图片": vm.risk.gaowenrongrongphoto,
            "使用排风管道图片": vm.risk.shiyongpaifengguandaophoto,
            "危险工艺无图片": vm.risk.weixiangongyiwuphoto,

            "无预案无演练图片": vm.risk.wuyuanwuyanlianphoto,
            "有预案无演练图片": vm.risk.youyuanwuyanlianphoto,
            "有预案有演练图片": vm.risk.youyuanyouyanlianphoto,

            "未达标图片": vm.risk.weidabiaophoto,
            "达标但记录不完善图片": vm.risk.dabiaodanjilubuwanshanphoto,
            "达标且有效运行图片": vm.risk.dabiaoqieyouxiaoyunxingphoto,

            "有自查自报并上传到系统图片": vm.risk.youzichazibaobingshangchuandaoxitongphoto,
            "有自查自报，但未上传图片": vm.risk.youzichazibaodanweishangchuanphoto,
            "未进行自查自白图片": vm.risk.weijinxingzichazibaophoto,

            "无三级培训图片": vm.risk.wusanjipeixunphoto,
            "有三及培训但不完善图片": vm.risk.yousanjipeixundanbuwanshanphoto,
            "三级培训完善图片": vm.risk.sanjipeixunwanshanphoto,
          });

          try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render();
          }catch (error) {
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
            function replaceErrors(key, value) {
              if (value instanceof Error) {
                return Object.getOwnPropertyNames(value).reduce(function(
                  error,
                  key
                  ) {
                    error[key] = value[key];
                    return error;
                  },
                  {});
              }
              return value;
            }
            console.log(JSON.stringify({ error: error }, replaceErrors));

            if (error.properties && error.properties.errors instanceof Array) {
              const errorMessages = error.properties.errors
                .map(function(error) {
                  return error.properties.explanation;
                })
                .join("\n");
              console.log("errorMessages", errorMessages);
              // errorMessages is a humanly readable message looking like this :
              // 'The tag beginning with "foobar" is unopened'
            }
            throw error;
          }
          var out = doc.getZip().generate({
            type: "blob",
            compression: "DEFLATE",
            mimeType:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          }); //Output the document using Data-URI
          saveAs(out, row.companyName + ".docx");
          //location.reload()
      })
        function getHttpData(url, callback) {
          https
            .request(url, function (response) {
              if (response.statusCode !== 200) {
                return callback(
                  new Error(
                    `Request to ${url} failed, status code: ${response.statusCode}`
                  )
                );
              }

              const data = new Stream();
              response.on("data", function (chunk) {
                data.push(chunk);
              });
              response.on("end", function () {
                callback(null, data.read());
              });
              response.on("error", function (e) {
                callback(e);
              });
            })
            .end();
        }

      },

      async onSubmit(){
        const {data: res} = await this.$http.get("/get/enterprise/by/name",{
          params:{name:this.searchForm.name}
        })
        if (res.data.length === 0) this.$message.error("该企业不存在！")
        this.tableData = res.data
      },
      async getAllEnterprise(){
        const {data: res} = await this.$http.get('/get/all/enterprise')
        if (res === null) this.$message.error("该企业不存在！")
        this.tableData = res.data
        this.loading = false
      }

    }
  }
</script>

<style scoped>
  .el-form{
    display: flex;
  }
  .el-form-item{
    margin-bottom: 0;
  }
  /deep/.el-table .warning-row {
    background: #E6A23C;
  }

  /deep/.el-table .success-row {
    background: #67C23A;
  }
  /deep/.el-table .danger-row {
    background: #F56C6C;
  }
  /deep/.el-table .no-danger-row {
    background: #409EFF;
  }
  /deep/.el-table .less-danger-row {
    background: #FFFF77;
  }

</style>
