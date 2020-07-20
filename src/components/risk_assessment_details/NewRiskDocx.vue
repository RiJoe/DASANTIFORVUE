<template>
    <div class="mytable" >
      <!--<el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title" >
            <i class="el-icon-s-cooperation"></i>事故后果
          </template>
          <div class="info-detail">
            <div>
              <p >1.重大危险源：{{this.zhongdaweixianyuan.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="zhongdaweixianyuanurl"
                :preview-src-list="photo1">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
          <el-divider></el-divider>
          <div class="info-detail">
            <div>
              <p>2.特种设备：{{tezhongshebei.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="tezhongshebeiurl"
                :preview-src-list="tezhongshebeiphoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
          <el-divider></el-divider>
          <div class="info-detail">
            <div>
              <p>3.危险设施、设备：{{weixianshebei.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="weixianshebeiurl"
                :preview-src-list="weixianshebeiphoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
          <el-divider></el-divider>
          <div class="info-detail">
            <div>
              <p>4.危险化学品：{{weixianhuaxuepin.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="weixianhuaxuepinurl"
                :preview-src-list="weixianhuaxuepinphoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
          <el-divider></el-divider>
          <div class="info-detail">
            <div>
              <p>5.危险工艺：{{weixiangongyi.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="weixiangongyiurl"
                :preview-src-list="weixiangongyiphoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
          <el-divider></el-divider>
          <div class="info-detail">
            <div>
              <p>6.应急反应：{{yingjifanying.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="yingjifanyingurl"
                :preview-src-list="yingjifanxingphoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <i class="el-icon-s-cooperation"></i>事故可能性
          </template>
          <div class="info-detail">
            <div>
              <p >7.安全生产标准化：{{anquanshengchanbiaozhunhua.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="anquanshengchanbiaozhunhuaurl"
                :preview-src-list="anquanshengchanbiaozhunhuaphoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
          <el-divider></el-divider>
          <div class="info-detail">
            <div>
              <p >8.隐患自查自报：{{yinhuanzichazibao.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="yinhuanzichazibaourl"
                :preview-src-list="yinhuanzichazibaophoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
          <el-divider></el-divider>
          <div class="info-detail">
            <div>
              <p >9.安全教育培训情况：{{anquanjiaoyu.join(',')}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image
                style="width: 50px; height: 50px"
                :src="anquanjiaoyuurl"
                :preview-src-list="anquanjiaoyuphoto">
                <div slot="error" class="image-slot">
                  <p>无图片</p>
                </div>
              </el-image>
            </div>

          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <i class="el-icon-s-cooperation"></i>事故暴露程度
          </template>
          <div class="employee-detail">
            <p >10.从业人数（每班）：{{chongyerenshu}}</p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <i class="el-icon-s-marketing"></i>风险详情
          </template>
            <div>
            <el-card class="box-card">
              <p>企业名称：{{msg.companyName}}</p>
              <p>风险值：{{score}}</p>
              <p>风险等级：{{therisklevel}}</p>
              <p>主要危险源：{{weixianshebei.join(',')}}</p>
              <p>主要风险名称：{{weixiangongyi.join(',')}}</p>
              <p>措施：{{work}}</p>
            </el-card>
            </div>
        </el-collapse-item>
      </el-collapse>-->
      <!--<h3>{{msg.companyName}}风险详情</h3>
      <el-table
        :data="riskmessage"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          label="类别"
          width="180">
          <template slot-scope="scope">
            <h3 v-if="scope.row.categoryId === 1">重大事故</h3>
            <h3 v-if="scope.row.categoryId === 2">事故可能性</h3>
            <h3 v-if="scope.row.categoryId === 3">事故暴露程度</h3>
          </template>
        </el-table-column>
        <el-table-column
          label="影响因素">
          <template slot-scope="scope">
            <h4 v-if="scope.row.influenceFactorId === 1">1.重大危险源</h4>
            <h4 v-if="scope.row.influenceFactorId === 2">2.特种设备</h4>
            <h4 v-if="scope.row.influenceFactorId === 3">3.危险设备、设施</h4>
            <h4 v-if="scope.row.influenceFactorId === 4">4.危险化学品</h4>
            <h4 v-if="scope.row.influenceFactorId === 5">5.危险工艺</h4>
            <h4 v-if="scope.row.influenceFactorId === 6">6.应急反应</h4>
            <h4 v-if="scope.row.influenceFactorId === 7">7.生产安全标准化</h4>
            <h4 v-if="scope.row.influenceFactorId === 8">8.隐患自查自报</h4>
            <h4 v-if="scope.row.influenceFactorId === 9">9.安全教育培训情况</h4>
            <h4 v-if="scope.row.influenceFactorId === 10">10.从业人数（每班）</h4>
          </template>
        </el-table-column>
        <el-table-column
          prop="determineFactor"
          label="判定要素">
          &lt;!&ndash;<template slot-scope="scope">
            <h5 v-if="scope.row.determineFactor == '危险化学品'">{{scope.row.remark}}</h5>
          </template>&ndash;&gt;
        </el-table-column>
        <el-table-column
          prop="score"
          label="分值情况">
        </el-table-column>
        <el-table-column
          label="现场图片">
          <template slot-scope="scope">
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="scope.row.photo[0]"
              :preview-src-list="scope.row.photo">
              <div slot="error" class="image-slot">
                <p>无图片</p>
              </div>
            </el-image>
          </div>
          </template>
        </el-table-column>

      </el-table>
      <div class="box-and-card">
      <el-card class="box-card">
        <p>企业名称：{{msg.companyName}}</p>
        <p>主要负责人：{{msg.principal}}</p>
        <p>填报人：{{msg.fillName}}</p>
        <p>填报人电话：{{msg.fillNumber}}</p>
        <p>企业地址：{{msg.address}}</p>
      </el-card>

      <el-card class="box-card">

        <p>风险值：{{msg.riskScore}}</p>
        <p v-if="msg.riskScore >= 1000">风险等级：重大危险</p>
        <p v-if="msg.riskScore <1000  && msg.riskScore >= 720">风险等级：较大风险</p>
        <p v-if="msg.riskScore <720 && msg.riskScore >= 500 ">风险等级：一般风险</p>
        <p v-if="msg.riskScore <500 && msg.riskScore >= 300  ">风险等级：较低风险</p>
        <p>主要危险源：{{msg.majorSourceOfDanger}}</p>
        <p>主要风险名称：{{msg.mainRisk}}</p>
        <p v-if="msg.riskScore >= 1000">措施：不可容许、停工</p>
        <p v-if="msg.riskScore <1000  && msg.riskScore >= 720">措施：立即整改，方案、验收</p>
        <p v-if="msg.riskScore <720 && msg.riskScore >= 500 ">措施：需要整改，整改、检查</p>
        <p v-if="msg.riskScore <500 && msg.riskScore >= 300  ">措施：需要注意，培训、检查</p>
      </el-card>

      </div>-->
      <h3>2020年{{msg.companyName}}风险详情</h3>
    <table border="1" cellspacing="0" align="center">
      <tr>
        <td>类别</td>
        <td>影响因素</td>
        <td>判定要素</td>
        <td>赋分标准</td>
        <td>具体情况</td>
        <td>现场照片</td>
      </tr>
      <tr>
        <td rowspan="31">事故后果</td>
        <td rowspan="7">1.重大危险源</td>
        <td>一级</td>
        <td>10</td>
        <td>{{risk.riskLevel}}</td>
        <td>

            <el-image
              style="width: 35px; height: 35px"
              :src="risk.photoOne[0]"
              :preview-src-list="risk.photoOne">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>

        </td>
      </tr>
      <tr>
        <td>二级</td>
        <td>7</td>
        <td>{{risk.riskLevel2}}</td>
        <td>
          <div class="demo-image__preview">
          <el-image
            style="width: 35px; height: 35px"
            :src="risk.photoTwo[0]"
            :preview-src-list="risk.photoTwo">
            <div slot="error" class="image-slot">
              <p>无</p>
            </div>
          </el-image>
        </div>
        </td>
      </tr>
      <tr></tr>
      <tr></tr>
      <tr>
        <td>三级</td>
        <td>5</td>
        <td>{{risk.riskLevel3}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.photoThree[0]"
              :preview-src-list="risk.photoThree">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>四级</td>
        <td>3</td>
        <td>{{risk.riskLevel4}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.photoFour[0]"
              :preview-src-list="risk.photoFour">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>否</td>
        <td>1</td>
        <td>{{risk.riskLevel5}}</td>
        <td></td>
      </tr>
      <tr >
        <td rowspan="4">2.特种设备</td>
        <td>锅炉</td>
        <td>10</td>
        <td>{{risk.guolu}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.guoluphoto[0]"
              :preview-src-list="risk.guoluphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>压力容器</td>
        <td>7</td>
        <td>{{risk.yalirongqi}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.yalirongqiphoto[0]"
              :preview-src-list="risk.yalirongqiphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>其他（电梯）</td>
        <td>4</td>
        <td>{{risk.qita}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.qitaphoto[0]"
              :preview-src-list="risk.qitaphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>无</td>
        <td>1</td>
        <td>{{risk.not}}</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="5">3.危险设备、设施</td>
        <td>洁净车间</td>
        <td>7</td>
        <td>{{risk.jiejingchejian}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.jiejingchejianphoto[0]"
              :preview-src-list="risk.jiejingchejianphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>砂光机</td>
        <td>5</td>
        <td>{{risk.shaguagnji}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.shaguagnjiphoto[0]"
              :preview-src-list="risk.shaguagnjiphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>冲剪压机械</td>
        <td>5</td>
        <td>{{risk.chongjianyajixie}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.chongjianyajixiephoto[0]"
              :preview-src-list="risk.chongjianyajixiephoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>烤箱</td>
        <td>3</td>
        <td>{{risk.kaoxiang}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.kaoxiangphoto[0]"
              :preview-src-list="risk.kaoxiangphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>无</td>
        <td>1</td>
        <td>{{risk.weixianshebeiwu}}</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="2">4.危险化学品</td>
        <td>危险化学品名称（闪点）、最大量、MSDS</td>
        <td>5</td>
        <td>{{risk.weixianhuaxuepin}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.weixianhuaxuepinphoto[0]"
              :preview-src-list="risk.weixianhuaxuepinphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>无</td>
        <td>1</td>
        <td>{{risk.weixianhuaxuepinwu}}</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="10">5.危险工艺</td>
        <td>铝镁粉尘</td>
        <td>10</td>
        <td>{{risk.lvmeifenchen}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.lvmeifenchenphoto[0]"
              :preview-src-list="risk.lvmeifenchenphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>其他粉尘</td>
        <td>7</td>
        <td>{{risk.qitafenchen}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.qitafenchenphoto[0]"
              :preview-src-list="risk.qitafenchenphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>涉氨</td>
        <td>5</td>
        <td>{{risk.shean}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.sheanphoto[0]"
              :preview-src-list="risk.sheanphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>有限空间</td>
        <td>5</td>
        <td>{{risk.youxiankongjian}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.youxiankongjianphoto[0]"
              :preview-src-list="risk.youxiankongjianphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>喷漆喷油</td>
        <td>5</td>
        <td>{{risk.penqipenyou}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.youxiankongjianphoto[0]"
              :preview-src-list="risk.youxiankongjianphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>涂层烘干</td>
        <td>5</td>
        <td>{{risk.tucenghonggan}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.tucenghongganphoto[0]"
              :preview-src-list="risk.tucenghongganphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>锂离子电池</td>
        <td>5</td>
        <td>{{risk.lilizidianchi}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.lilizidianchiphoto[0]"
              :preview-src-list="risk.lilizidianchiphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>高温熔融</td>
        <td>5</td>
        <td>{{risk.gaowenrongrong}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.gaowenrongrongphoto[0]"
              :preview-src-list="risk.gaowenrongrongphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>使用排风管道</td>
        <td>3</td>
        <td>{{risk.shiyongpaifengguandao}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.shiyongpaifengguandaophoto[0]"
              :preview-src-list="risk.shiyongpaifengguandaophoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>无</td>
        <td>1</td>
        <td>{{risk.weixiangongyiwu}}</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="3">6.应急反应</td>
        <td>无预案无演练</td>
        <td>3</td>
        <td>{{risk.wuyuanwuyanlian}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.wuyuanwuyanlianphoto[0]"
              :preview-src-list="risk.wuyuanwuyanlianphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>有预案无演练</td>
        <td>1</td>
        <td>{{risk.youyuanwuyanlian}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.youyuanwuyanlianphoto[0]"
              :preview-src-list="risk.youyuanwuyanlianphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>有预案有演练</td>
        <td>-2</td>
        <td>{{risk.youyuanyouyanlian}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.youyuanyouyanlianphoto[0]"
              :preview-src-list="risk.youyuanyouyanlianphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td rowspan="9">事故可能性</td>
        <td rowspan="3">7.安全生产标准化</td>
        <td>未达标</td>
        <td>5</td>
        <td>{{risk.weidabiao}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.weidabiaophoto[0]"
              :preview-src-list="risk.weidabiaophoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>达标但记录不完善</td>
        <td>2</td>
        <td>{{risk.dabiaodanjilubuwanshan}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.dabiaodanjilubuwanshanphoto[0]"
              :preview-src-list="risk.dabiaodanjilubuwanshanphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>达标且有效运行</td>
        <td>1</td>
        <td>{{risk.dabiaoqieyouxiaoyunxing}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.dabiaoqieyouxiaoyunxingphoto[0]"
              :preview-src-list="risk.dabiaoqieyouxiaoyunxingphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td rowspan="3">8.隐患自查自报</td>
        <td>有自查自报并上传到系统</td>
        <td>1</td>
        <td>{{risk.youzichazibaobingshangchuandaoxitong}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.youzichazibaobingshangchuandaoxitongphoto[0]"
              :preview-src-list="risk.youzichazibaobingshangchuandaoxitongphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>有自查自报，但未上传</td>
        <td>2</td>
        <td>{{risk.youzichazibaodanweishangchuan}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.youzichazibaodanweishangchuan[0]"
              :preview-src-list="risk.youzichazibaodanweishangchuanphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>未进行自查自报</td>
        <td>5</td>
        <td>{{risk.weijinxingzichazibao}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.weijinxingzichazibaophoto[0]"
              :preview-src-list="risk.weijinxingzichazibaophoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td rowspan="3">9.安全教育培训情况</td>
        <td>无三级培训</td>
        <td>5</td>
        <td>{{risk.wusanjipeixun}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.wusanjipeixunphoto[0]"
              :preview-src-list="risk.wusanjipeixunphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>有三级培训但不完善</td>
        <td>2</td>
        <td>{{risk.yousanjipeixundanbuwanshan}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.yousanjipeixundanbuwanshanphoto[0]"
              :preview-src-list="risk.yousanjipeixundanbuwanshanphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td>三级培训完善</td>
        <td>1</td>
        <td>{{risk.sanjipeixunwanshan}}</td>
        <td>
          <div class="demo-image__preview">
            <el-image
              style="width: 35px; height: 35px"
              :src="risk.sanjipeixunwanshanphoto[0]"
              :preview-src-list="risk.sanjipeixunwanshanphoto">
              <div slot="error" class="image-slot">
                <p>无</p>
              </div>
            </el-image>
          </div>
        </td>
      </tr>
      <tr>
        <td rowspan="4">事故暴露程度</td>
        <td rowspan="4">10.从业人数（每班）</td>
        <td>≥300</td>
        <td>10</td>
        <td colspan="2">{{risk.morethanthreehundred}}</td>

      </tr>
      <tr>
        <td>100～300</td>
        <td>7</td>
        <td colspan="2">{{risk.onetothreehundred}}</td>

      </tr>
      <tr>
        <td>30～100</td>
        <td>4</td>
        <td colspan="2">{{risk.threetoonehundred}}</td>

      </tr>
      <tr>
        <td><30</td>
        <td>1</td>
        <td colspan="2"> {{risk.lessthanthirty}}</td>

      </tr>
      <tr>
        <td>风险值</td>
        <td>{{msg.riskScore}}</td>
        <td>加强培训</td>
        <td>{{msg.strengthenTraining}}</td>
        <td colspan="2">事故风险值=事故后果*事故可能性事故暴露程度</td>
      </tr>
      <tr>
        <td>单位名称</td>
        <td>{{msg.companyName}}</td>
        <td>地址</td>
        <td>{{msg.address}}</td>
        <td>经纬度</td>
        <td>{{msg.lng}}<br>{{msg.lat}}</td>
      </tr>
      <tr>
        <td>主要负责人</td>
        <td>{{msg.principal}}</td>
        <td>填报人及联系电话</td>
        <td>{{msg.fillName}}<br>{{msg.fillNumber}}</td>
        <td>全员人数</td>
        <td>{{msg.employeeNumber}}</td>
      </tr>
      <tr>
        <td colspan="5">
          <p style="color: red">近三年有无发生一般事故及以上事故</p>
          <p>(备注：一般事故是指3人以下死亡，或者10人以下重伤，或者1000万元以下直接经济损失的事)</p>
        </td>
        <td>{{msg.note}}</td>
      </tr>
    </table>
      <p style="color: red">注：照片尽量横拍（照片尺寸：3.5*4.5），蓝色部分需要企业核对，红色部分需要企业填写。</p>
      <p>计算说明：事故后果得分值=重大危险源得分值+特种设备得分值+危险设备得分值+危险化学品得分值+危险工艺得分值+应急反应得分值</p>
      <p>事故可能性得分值=标准化得分值+隐患自查自报得分值+安全教育培训情况得分值</p>
      <p>事故暴露程度得分值=从业人数得分值和频度综合得分值</p>
      <p>事故风险值=事故后果*事故可能性*事故暴露程度</p>
      <h5>附：工业企业点位风险等级判定表</h5>
      <table border="1" cellspacing="0" align="center">
        <tr>
          <td>风险分级标准(R)</td>
          <td>风险等级</td>
          <td>措施</td>
          <td>表示色</td>
        </tr>
        <tr>
          <td>≥1000</td>
          <td>重大风险</td>
          <td>不可容许、停工</td>
          <td bgcolor="red">红色</td>
        </tr>
        <tr>
          <td>1000＞R≥720</td>
          <td>较大风险</td>
          <td>立即整改，方案、验收</td>
          <td bgcolor="orange">橙色</td>
        </tr>
        <tr>
          <td>720＞R≥500</td>
          <td>一般风险</td>
          <td>需要整改，整改、检查</td>
          <td bgcolor="yellow">黄色</td>
        </tr>
        <tr>
          <td>500＞R≥300</td>
          <td>低风险</td>
          <td>需要注意，培训、检查</td>
          <td bgcolor="blue">蓝色</td>
        </tr>
      </table>
    </div>
</template>

<script>

  export default {
    data(){
      return{

        msg: {},
        activeNames: ["1","2","3","4"],
        zhongdaweixianyuan: [],
        photo1: [],
        zhongdaweixianyuanurl: '',


        tezhongshebei: [],
        tezhongshebeiphoto: [],
        tezhongshebeiurl: '',

        weixianshebei: [],
        weixianshebeiphoto: [],
        weixianshebeiurl: '',

        weixianhuaxuepin: [],
        weixianhuaxuepinphoto: [],
        weixianhuaxuepinurl: '',

        weixiangongyi: [],
        weixiangongyiphoto: [],
        weixiangongyiurl: '',

        yingjifanying:[],
        yingjifanxingphoto: [],
        yingjifanyingurl: '',

        anquanshengchanbiaozhunhua: [],
        anquanshengchanbiaozhunhuaphoto: [],
        anquanshengchanbiaozhunhuaurl: '',

        yinhuanzichazibao: [],
        yinhuanzichazibaophoto: [],
        yinhuanzichazibaourl: '',

        anquanjiaoyu: [],
        anquanjiaoyuphoto: [],
        anquanjiaoyuurl: '',

        chongyerenshu: '',

        score: '',
        therisklevel: '',
        work: '',

        indexInfoList: [],
        myphoto: '',
        riskmessage: [],

        risk: {
          // 1、重大危险源
          riskLevel: '',
          riskLevel2: '',
          riskLevel3: '',
          riskLevel4: '',
          riskLevel5: '',
          photoOne: [],
          photoTwo: [],
          photoThree: [],
          photoFour: [],
          photoFive: [],
          // 2、特种设备
          guolu: '',
          yalirongqi: '',
          qita: '',
          not: '',
          guoluphoto: [],
          yalirongqiphoto: [],
          qitaphoto: [],
          notphoto: [],
          // 3、危险设施、设备
          jiejingchejian: '',
          shaguagnji: '',
          chongjianyajixie: '',
          kaoxiang: '',
          weixianshebeiwu: '',
          jiejingchejianphoto: [],
          shaguagnjiphoto: [],
          chongjianyajixiephoto: [],
          kaoxiangphoto: [],
          weixianshebeiwuphoto: [],
          // 4、危险化学品
          weixianhuaxuepin: '',
          weixianhuaxuepinwu: '',
          weixianhuaxuepinphoto: [],
          weixianhuaxuepinwuphoto: [],
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
          lvmeifenchenphoto: [],
          qitafenchenphoto: [],
          sheanphoto: [],
          youxiankongjianphoto: [],
          penqipenyouphoto: [],
          tucenghongganphoto: [],
          lilizidianchiphoto: [],
          gaowenrongrongphoto: [],
          shiyongpaifengguandaophoto: [],
          weixiangongyiwuphoto: [],
          // 6、应急反应
          wuyuanwuyanlian: '',
          youyuanwuyanlian: '',
          youyuanyouyanlian: '',
          wuyuanwuyanlianphoto: [],
          youyuanwuyanlianphoto: [],
          youyuanyouyanlianphoto: [],
          // 7、安全生产标准化
          weidabiao: '',
          dabiaodanjilubuwanshan: '',
          dabiaoqieyouxiaoyunxing: '',
          weidabiaophoto: [],
          dabiaodanjilubuwanshanphoto: [],
          dabiaoqieyouxiaoyunxingphoto: [],
          // 8、隐患自查自报
          youzichazibaobingshangchuandaoxitong: '',
          youzichazibaodanweishangchuan: '',
          weijinxingzichazibao: '',
          youzichazibaobingshangchuandaoxitongphoto: [],
          youzichazibaodanweishangchuanphoto: [],
          weijinxingzichazibaophoto: [],
          // 9、安全教育培训情况
          wusanjipeixun: '',
          yousanjipeixundanbuwanshan:'',
          sanjipeixunwanshan: '',
          wusanjipeixunphoto: [],
          yousanjipeixundanbuwanshanphoto:[],
          sanjipeixunwanshanphoto: [],
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
      }
    },
    created () {
      this.getData()
    },
    mounted () {
      //this.getDetailed()

    },
    methods: {
      /*objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          let index = this.indexInfoList.findIndex(item=>{
            return item.firstIndex === rowIndex
          })
          if (index > -1) {
            return {
              rowspan: this.indexInfoList[index].length,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      },*/

      getData(){
        let newData = this.$route.query.dataObj
        this.msg = newData
        // console.log(this.msg.concreteEvaluationList)
        this.getDetailed()
      },
      getDetailed(){

        /*let arr = []
        this.msg.concreteEvaluationList.forEach(ele=>{
          this.myphoto = (ele.photo || '').split('#')
          ele.photo = this.myphoto.splice(1)
          this.riskmessage.push(ele)

          let firstIndex = this.msg.concreteEvaluationList.findIndex(item=>{
            return item.categoryId === ele.categoryId
          })
          if(arr.findIndex(item=>{
            return item.firstIndex === firstIndex
          }) ===-1 ){
            arr.push({
              length: this.msg.concreteEvaluationList.filter(item=>{
                return item.categoryId === ele.categoryId
              }).length,
              firstIndex: firstIndex
            })
          }
        })
        this.indexInfoList = arr
        console.log(this.riskmessage)*/

        this.msg.concreteEvaluationList.forEach(item=>{
          // 1、重大危险源
          if(item.influenceFactorId ===1){
            if (item.determineFactor ==='一级') this.risk.riskLevel = "√",this.risk.photoOne = (item.photo || "").split(',')
            if (item.determineFactor ==='二级') this.risk.riskLevel2 = "√", this.risk.photoTwo = (item.photo || "").split(',')
            if (item.determineFactor ==='三级') this.risk.riskLevel3 = "√",this.risk.photoThree = (item.photo || "").split(',')
            if (item.determineFactor ==='四级') this.risk.riskLevel4 = "√",this.risk.photoFour = (item.photo || "").split(',')
            if (item.determineFactor ==='无') this.risk.riskLevel5 = "√",this.risk.photoFive = (item.photo || "").split(',')
          }
          // 2、特种设备
          if(item.influenceFactorId === 2){
            if(item.determineFactor ==='锅炉')  this.risk.guolu = "√",this.risk.guoluphoto = (item.photo || "").split(',')
            if(item.determineFactor ==='压力容器')  this.risk.yalirongqi = "√",this.risk.yalirongqiphoto = (item.photo || "").split(',')
            if(item.determineFactor ==='其他')  this.risk.qita = "√",this.risk.qitaphoto = (item.photo || "").split(',')
            if(item.determineFactor ==='无')  this.risk.not = "√",this.risk.notphoto = (item.photo || "").split(',')
          }
          // 3、危险设施设备
          if(item.influenceFactorId === 3){
            if(item.determineFactor === "洁净车间") this.risk.jiejingchejian = "√",this.risk.jiejingchejianphoto = (item.photo || "").split(',')
            if(item.determineFactor === "砂光机") this.risk.shaguagnji = "√",this.risk.shaguagnjiphoto = (item.photo || "").split(',')
            if(item.determineFactor === "冲剪压机械") this.risk.chongjianyajixie = "√",this.risk.chongjianyajixiephoto = (item.photo || "").split(',')
            if(item.determineFactor === "烤箱") this.risk.kaoxiang = "√",this.risk.kaoxiangphoto = (item.photo || "").split(',')
            if(item.determineFactor === "无") this.risk.weixianshebeiwu = "√",this.risk.weixianshebeiwuphoto = (item.photo || "").split(',')
          }
          // 4、危险化学品
          if (item.influenceFactorId ===4){
            if(item.determineFactor === "危险化学品") this.risk.weixianhuaxuepin = item.remark,this.risk.weixianhuaxuepinphoto = (item.photo || "").split(',')
            if(item.determineFactor === "无") this.risk.weixianhuaxuepinwu= "√",this.risk.weixianhuaxuepinwuphoto = (item.photo || "").split(',')
          }
          // 5、危险工艺
          if (item.influenceFactorId ===5){
            if(item.determineFactor === "铝镁粉尘") this.risk.lvmeifenchen = "√",this.risk.lvmeifenchenphoto = (item.photo || "").split(',')
            if(item.determineFactor === "木粉尘") this.risk.qitafenchen = "√",this.risk.qitafenchenphoto = (item.photo || "").split(',')
            if(item.determineFactor === "涉氨") this.risk.shean = "√",this.risk.sheanphoto = (item.photo || "").split(',')
            if(item.determineFactor === "有限空间") this.risk.youxiankongjian = "√",this.risk.youxiankongjianphoto = (item.photo || "").split(',')
            if(item.determineFactor === "喷漆喷油") this.risk.penqipenyou = "√",this.risk.penqipenyouphoto = (item.photo || "").split(',')
            if(item.determineFactor === "涂层烘干") this.risk.tucenghonggan = "√",this.risk.tucenghongganphoto = (item.photo || "").split(',')
            if(item.determineFactor === "锂离子电池") this.risk.lilizidianchi = "√",this.risk.lilizidianchiphoto = (item.photo || "").split(',')
            if(item.determineFactor === "高温熔融") this.risk.gaowenrongrong = "√",this.risk.gaowenrongrongphoto = (item.photo || "").split(',')
            if(item.determineFactor === "使用排风管道") this.risk.shiyongpaifengguandao = "√",this.risk.shiyongpaifengguandaophoto = (item.photo || "").split(',')
            if(item.determineFactor === "无") this.risk.weixiangongyiwu = "√",this.risk.weixiangongyiwuphoto = (item.photo || "").split(',')

          }
          // 6、应急反应
          if(item.influenceFactorId === 6){
            if (item.determineFactor === "无预案无演练") this.risk.wuyuanwuyanlian = "√" , this.risk.wuyuanwuyanlianphoto = (item.photo || "").split(',')
            if (item.determineFactor === "有预案无演练") this.risk.youyuanwuyanlian = "√" , this.risk.youyuanwuyanlianphoto = (item.photo || "").split(',')
            if (item.determineFactor === "有预案有演练") this.risk.youyuanyouyanlian = "√" , this.risk.youyuanyouyanlianphoto = (item.photo || "").split(',')
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
        })


        /*// 初始化总分值
        let accidentConsequenceScore = null
        let possibilityOfAccidentScore = null
        let theNumberOfEmployeesScore = null
        // 多组选项照片
        let weixiangongyiphotoitem = []
        let tezhongshebeiphotoitem = []
        let weixianshebeiphotoitem = []
        this.msg.concreteEvaluationList.forEach((item,index)=>{
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
          // 把影响因素与图片进行展示
          if (item.influenceFactorId ===1){
            this.zhongdaweixianyuan.push(item.determineFactor)
            const myphoto = item.photo.split('#')
            for (let i=1;i<myphoto.length;i++){
              this.photo1.push(myphoto[i])
            }
            this.zhongdaweixianyuanurl = myphoto[1]
            return false
          }
          if (item.influenceFactorId ===2){
            this.tezhongshebei.push(item.determineFactor)
            const myphoto = (item.photo || "").split('#')
            for (let i=1;i<myphoto.length;i++){
              tezhongshebeiphotoitem.push(myphoto[i])
            }
            return false
          }
          if (item.influenceFactorId ===3){
            this.weixianshebei.push(item.determineFactor)
            const myphoto = (item.photo || "").split('#')

            for (let i=1;i<myphoto.length;i++){
              weixianshebeiphotoitem.push(myphoto[i])
            }
          }
          if (item.influenceFactorId ===4){
            if (item.determineFactor === "危险化学品") this.weixianhuaxuepin.push(item.remark)
            else this.weixianhuaxuepin.push(item.determineFactor)
            const myphoto = item.photo.split('#')
            for (let i=1;i<myphoto.length;i++){
              this.weixianhuaxuepinphoto.push(myphoto[i])
            }
            this.weixianhuaxuepinurl = myphoto[1]
            return false
          }
          if (item.influenceFactorId ===5){
            this.weixiangongyi.push(item.determineFactor)
            const myphoto = (item.photo || "").split('#')
            for (let i=1;i<myphoto.length;i++){
              weixiangongyiphotoitem.push(myphoto[i])
            }
            return false
          }
          if (item.influenceFactorId ===6){
            this.yingjifanying.push(item.determineFactor)
            const myphoto = item.photo.split('#')
            for (let i=1;i<myphoto.length;i++){
              this.yingjifanxingphoto.push(myphoto[i])
            }
            this.yingjifanyingurl = myphoto[1]
            return false
          }

          if (item.influenceFactorId ===7){
            this.anquanshengchanbiaozhunhua.push(item.determineFactor)
            const myphoto = (item.photo || "").split('#')
            for (let i=1;i<myphoto.length;i++){
              this.anquanshengchanbiaozhunhuaphoto.push(myphoto[i])
            }
            this.anquanshengchanbiaozhunhuaurl = myphoto[1]
            return false
          }
          if (item.influenceFactorId ===8){
            this.yinhuanzichazibao.push(item.determineFactor)
            const myphoto = (item.photo || "").split('#')
            for (let i=1;i<myphoto.length;i++){
              this.yinhuanzichazibaophoto.push(myphoto[i])
            }
            this.yinhuanzichazibaourl = myphoto[1]
            return false
          }
          if (item.influenceFactorId ===9){
            this.anquanjiaoyu.push(item.determineFactor)
            const myphoto = (item.photo || "").split('#')
            for (let i=1;i<myphoto.length;i++){
              this.anquanjiaoyuphoto.push(myphoto[i])
            }
            this.anquanjiaoyuurl = myphoto[1]
            return false
          }
          if(item.influenceFactorId ===10){
            this.chongyerenshu = item.determineFactor
            return false
          }

        })
        // 多选项图片数组
        this.weixiangongyiphoto = weixiangongyiphotoitem
        this.weixiangongyiurl = weixiangongyiphotoitem[0]
        this.tezhongshebeiphoto = tezhongshebeiphotoitem
        this.tezhongshebeiurl = tezhongshebeiphotoitem[0]
        this.weixianshebeiphoto = weixianshebeiphotoitem
        this.weixianshebeiurl = weixianshebeiphotoitem[0]
        // 企业风险值
        this.score = accidentConsequenceScore*possibilityOfAccidentScore*theNumberOfEmployeesScore
        if(this.score>=1000){
          this.therisklevel="重大危险"
          this.work = "不可容许，停工"
        }
        if(1000>this.score&&this.score>=720){
          this.therisklevel="较大风险"
          this.work = "立即整改，方案、验收"
        }
        if(720>this.score&&this.score>=500){
          this.therisklevel="一般风险"
          this.work = "需要整改，整改、检查"
        }
        if(500>this.score&&this.score>=300){
          this.therisklevel="较低风险"
          this.work = "需要注意，培训、检查"
        }
        if(300>this.score){
          this.therisklevel="无风险"
          this.work = "无"
        }*/
      },

      handleChange(val) {
      },

    },


  }
</script>

<style scoped>
  .info-detail {
    display: flex;
    justify-content: space-between;
  }
  .employee-detail{
    text-align: left;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 50%;

  }
  .box-card p{
    text-align: left;
  }
  .box-and-card{
    display: flex;
  }

  table{
    border-collapse: collapse;
    background: white;
  }
  .mytable{
    padding-bottom: 40px;
  }
</style>
