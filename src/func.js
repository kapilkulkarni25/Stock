import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function Stocks() {
  const sym = ['AAIT', 'AAL', 'AAME', 'AAOI', 'AAON', 'AAPL', 'AAVL', 'AAWW', 'AAXJ', 'ABAC', 'ABAX', 'ABCB', 'ABCD', 'ABCO', 'ABCW', 'ABDC', 'ABGB', 'ABIO', 'ABMD', 'ABTL', 'ABY', 'ACAD', 'ACAS', 'ACAT', 'ACET', 'ACFC', 'ACFN', 'ACGL', 'ACHC', 'ACHN', 'ACIW', 'ACLS', 'ACNB', 'ACOR', 'ACPW', 'ACRX', 'ACSF', 'ACST', 'ACTA', 'ACTG', 'ACTS', 'ACUR', 'ACWI', 'ACWX', 'ACXM', 'ADAT', 'ADBE', 'ADEP', 'ADES', 'ADHD', 'ADI', 'ADMA', 'ADMP', 'ADMS', 'ADNC', 'ADP', 'ADRA', 'ADRD', 'ADRE', 'ADRU', 'ADSK', 'ADTN', 'ADUS', 'ADVS', 'ADXS', 'ADXSW', 'AEGN', 'AEGR', 'AEHR', 'AEIS', 'AEPI', 'AERI', 'AETI', 'AEY', 'AEZS', 'AFAM', 'AFCB', 'AFFX', 'AFH', 'AFMD', 'AFOP', 'AFSI', 'AGEN', 'AGII', 'AGIIL', 'AGIO', 'AGNC', 'AGNCB', 'AGNCP', 'AGND', 'AGRX', 'AGTC', 'AGYS', 'AGZD', 'AHGP', 'AHPI', 'AIMC', 'AINV', 'AIQ', 'AIRM', 'AIRR', 'AIRT', 'AIXG', 'AKAM', 'AKAO', 'AKBA', 'AKER', 'AKRX', 'ALCO', 'ALDR', 'ALDX', 'ALGN', 'ALGT', 'ALIM', 'ALKS', 'ALLB', 'ALLT', 'ALNY', 'ALOG', 'ALOT', 'ALQA', 'ALSK', 'ALTR', 'ALXA', 'ALXN', 'AMAG', 'AMAT', 'AMBA', 'AMBC', 'AMBCW', 'AMCC', 'AMCF', 'AMCN', 'AMCX', 'AMD', 'AMDA', 'AMED', 'AMGN', 'AMIC', 'AMKR', 'AMNB', 'AMOT', 'AMOV', 'AMPH', 'AMRB', 'AMRI', 'AMRK', 'AMRN', 'AMRS', 'AMSC', 'AMSF', 'AMSG', 'AMSGP', 'AMSWA', 'AMTX', 'AMWD', 'AMZN', 'ANAC', 'ANAD', 'ANAT', 'ANCB', 'ANCI', 'ANCX', 'ANDE', 'ANGI', 'ANGO', 'ANIK', 'ANIP', 'ANSS', 'ANTH', 'ANY', 'AOSL', 'APAGF', 'APDN', 'APDNW', 'APEI', 'APOG', 'APOL', 'APPY', 'APRI', 'APSA', 'APTO', 'APWC', 'AQXP', 'ARAY', 'ARCB', 'ARCC', 'ARCI', 'ARCP', 'ARCPP', 'ARCW', 'ARDM', 'ARDX', 'AREX', 'ARGS', 'ARIA', 'ARII', 'ARIS', 'ARKR', 'ARLP', 'ARMH', 'ARNA', 'AROW', 'ARQL', 'ARRS', 'ARRY', 'ARTNA', 'ARTW', 'ARTX', 'ARUN', 'ARWR', 'ASBB', 'ASBI', 'ASCMA', 'ASEI', 'ASFI', 'ASMB', 'ASMI', 'ASML', 'ASNA', 'ASPS', 'ASPX', 'ASRV', 'ASRVP', 'ASTC', 'ASTE', 'ASTI', 'ASUR', 'ASYS', 'ATAI', 'ATAX', 'ATEA', 'ATEC', 'ATHN', 'ATHX', 'ATLC', 'ATLO', 'ATML', 'ATNI', 'ATNY', 'ATOS', 'ATRA', 'ATRC', 'ATRI', 'ATRM', 'ATRO', 'ATRS', 'ATSG', 'ATTU', 'ATVI', 'AUBN', 'AUDC', 'AUMA', 'AUMAU', 'AUMAW', 'AUPH', 'AUXL', 'AVAV', 'AVEO', 'AVGO', 'AVHI', 'AVID', 'AVNR', 'AVNW', 'AWAY', 'AWRE', 'AXAS', 'AXDX', 'AXGN', 'AXJS', 'AXPW', 'AXPWW', 'AXTI', 'AZPN', 'BABY', 'BAGR', 'BAMM', 'BANF', 'BANFP', 'BANR', 'BANX', 'BASI', 'BBBY', 'BBC', 'BBCN', 'BBEP', 'BBEPP', 'BBGI', 'BBLU', 'BBNK', 'BBOX', 'BBP', 'BBRG', 'BBRY', 'BBSI', 'BCBP', 'BCLI', 'BCOM', 'BCOR', 'BCOV', 'BCPC', 'BCRX', 'BDBD', 'BDCV', 'BDE', 'BDGE', 'BDMS', 'BDSI', 'BEAT', 'BEAV', 'BEBE', 'BECN', 'BELFA', 'BELFB', 'BFIN', 'BGCP', 'BGFV', 'BGMD', 'BHBK', 'BIB', 'BICK', 'BIDU', 'BIIB', 'BIND', 'BIOC', 'BIOD', 'BIOL', 'BIOS', 'BIRT', 'BIS', 'BJRI', 'BKCC', 'BKEP', 'BKEPP', 'BKMU', 'BKSC', 'BKYF', 'BLCM', 'BLDP', 'BLDR', 'BLFS', 'BLIN', 'BLKB', 'BLMN', 'BLMT', 'BLRX', 'BLUE', 'BLVD', 'BLVDU', 'BLVDW', 'BMRC', 'BMRN', 'BMTC', 'BNCL', 'BNCN', 'BNDX', 'BNFT', 'BNSO', 'BOBE', 'BOCH', 'BOFI', 'BOKF', 'BONA', 'BONT', 'BOOM', 'BOSC', 'BOTA', 'BOTJ', 'BPFH', 'BPFHP', 'BPFHW', 'BPOP', 'BPOPM', 'BPOPN', 'BPTH', 'BRCD', 'BRCM', 'BRDR', 'BREW', 'BRID', 'BRKL', 'BRKR', 'BRKS', 'BRLI', 'BSDM', 'BSET', 'BSF', 'BSFT', 'BSPM', 'BSQR', 'BSRR', 'BSTC', 'BTUI', 'BUR', 'BUSE', 'BV', 'BVA', 'BVSN', 'BWEN', 'BWFG', 'BWINA', 'BWINB', 'BWLD', 'BYBK', 'BYFC', 'BYLK', 'CA', 'CAAS', 'CAC', 'CACB', 'CACC', 'CACG', 'CACGU', 'CACGW', 'CACH', 'CACQ', 'CADC', 'CADT', 'CADTR', 'CADTU', 'CADTW', 'CAKE', 'CALA', 'CALD', 'CALI', 'CALL', 'CALM', 'CAMB', 'CAMBU', 'CAMBW', 'CAMP', 'CAMT', 'CAPN', 'CAPNW', 'CAR', 'CARA', 'CARB', 'CARO', 'CART', 'CARV', 'CARZ', 'CASH', 'CASI', 'CASM', 'CASS', 'CASY', 'CATM', 'CATY', 'CATYW', 'CAVM', 'CBAK', 'CBAN', 'CBAY', 'CBDE', 'CBF', 'CBFV', 'CBIN', 'CBLI', 'CBMG', 'CBMX', 'CBNJ', 'CBNK', 'CBOE', 'CBPO', 'CBRL', 'CBRX', 'CBSH', 'CBSHP', 'CBST', 'CBSTZ', 'CCBG', 'CCCL', 'CCCR', 'CCIH', 'CCLP', 'CCMP', 'CCNE', 'CCOI', 'CCRN', 'CCUR', 'CCXI', 'CDC', 'CDK', 'CDNA', 'CDNS', 'CDTI', 'CDW', 'CDXS', 'CDZI', 'CECE', 'CECO', 'CELG', 'CELGZ', 'CEMI', 'CEMP', 'CENT', 'CENTA', 'CENX', 'CERE', 'CERN', 'CERS', 'CERU', 'CETV', 'CEVA', 'CFA', 'CFBK', 'CFFI', 'CFFN', 'CFGE', 'CFNB', 'CFNL', 'CFO', 'CFRX', 'CFRXW', 'CFRXZ', 'CG', 'CGEN', 'CGIX', 'CGNX', 'CGO', 'CHCI', 'CHCO', 'CHDN', 'CHEF', 'CHEV', 'CHFC', 'CHFN', 'CHI', 'CHKE', 'CHKP', 'CHLN', 'CHMG', 'CHNR', 'CHOP', 'CHRS', 'CHRW', 'CHSCM', 'CHSCN', 'CHSCO', 'CHSCP', 'CHTR', 'CHUY', 'CHW', 'CHXF', 'CHY', 'CHYR', 'CIDM', 'CIFC', 'CIMT', 'CINF', 'CISAW', 'CISG', 'CIZ', 'CIZN', 'CJJD', 'CKEC', 'CKSW', 'CLAC', 'CLACU', 'CLACW', 'CLBH', 'CLCT', 'CLDN', 'CLDX', 'CLFD', 'CLIR', 'CLMS', 'CLMT', 'CLNE', 'CLNT', 'CLRB', 'CLRBW', 'CLRO', 'CLRX', 'CLSN', 'CLTX', 'CLUB', 'CLVS', 'CLWT', 'CMCO', 'CMCSA', 'CMCSK', 'CMCT', 'CME', 'CMFN', 'CMGE', 'CMLS', 'CMPR', 'CMRX', 'CMSB', 'CMTL', 'CNAT', 'CNBKA', 'CNCE', 'CNDO', 'CNET', 'CNIT', 'CNLM', 'CNLMR', 'CNLMU', 'CNLMW', 'CNMD', 'CNOB', 'CNSI', 'CNSL', 'CNTF', 'CNTY', 'CNV', 'CNXR', 'CNYD', 'COB', 'COBK', 'COBZ', 'COCO', 'COHR', 'COHU', 'COKE', 'COLB', 'COLM', 'COMM', 'COMT', 'CONE', 'CONN', 'COOL', 'CORE', 'CORI', 'CORT', 'COSI', 'COST', 'COVS', 'COWN', 'COWNL', 'CPAH', 'CPGI', 'CPHC', 'CPHD', 'CPHR', 'CPIX', 'CPLA', 'CPLP', 'CPRT', 'CPRX', 'CPSI', 'CPSS', 'CPST', 'CPTA', 'CPXX', 'CRAI', 'CRAY', 'CRDC', 'CRDS', 'CRDT', 'CREE', 'CREG', 'CRESW', 'CRESY', 'CRIS', 'CRME', 'CRMT', 'CRNT', 'CROX', 'CRRC', 'CRRS', 'CRTN', 'CRTO', 'CRUS', 'CRVL', 'CRWN', 'CRWS', 'CRZO', 'CSBK', 'CSCD', 'CSCO', 'CSF', 'CSFL', 'CSGP', 'CSGS', 'CSII', 'CSIQ', 'CSOD', 'CSPI', 'CSQ', 'CSRE', 'CSTE', 'CSUN', 'CSWC', 'CTAS', 'CTBI', 'CTCM', 'CTCT', 'CTG', 'CTHR', 'CTIB', 'CTIC', 'CTRE', 'CTRL', 'CTRN', 'CTRP', 'CTRX', 'CTSH', 'CTSO', 'CTWS', 'CTXS', 'CU', 'CUBA', 'CUI', 'CUNB', 'CUTR', 'CVBF', 'CVCO', 'CVCY', 'CVGI', 'CVGW', 'CVLT', 'CVLY', 'CVTI', 'CVV', 'CWAY', 'CWBC', 'CWCO', 'CWST', 'CXDC', 'CY', 'CYAN', 'CYBE', 'CYBR', 'CYBX', 'CYCC', 'CYCCP', 'CYHHZ', 'CYNO', 'CYOU', 'CYRN', 'CYTK', 'CYTR', 'CYTX', 'CZFC', 'CZNC', 'CZR', 'CZWI', 'DAEG', 'DAIO', 'DAKT', 'DARA', 'DATE', 'DAVE', 'DAX', 'DBVT', 'DCIX', 'DCOM', 'DCTH', 'DENN', 'DEPO', 'DERM', 'DEST', 'DFRG', 'DFVL', 'DFVS', 'DGAS', 'DGICA', 'DGICB', 'DGII', 'DGLD', 'DGLY', 'DGRE', 'DGRS', 'DGRW', 'DHIL', 'DHRM', 'DIOD', 'DISCA', 'DISCB', 'DISCK', 'DISH', 'DJCO', 'DLBL', 'DLBS', 'DLHC', 'DLTR', 'DMLP', 'DMND', 'DMRC', 'DNBF', 'DNKN', 'DORM', 'DOVR', 'DOX', 'DPRX', 'DRAD', 'DRAM', 'DRIV', 'DRNA', 'DRRX', 'DRWI', 'DRWIW', 'DRYS', 'DSCI', 'DSCO', 'DSGX', 'DSKX', 'DSKY', 'DSLV', 'DSPG', 'DSWL', 'DTLK', 'DTSI', 'DTUL', 'DTUS', 'DTV', 'DTYL', 'DTYS', 'DVAX', 'DVCR', 'DWA', 'DWAT', 'DWCH', 'DWSN', 'DXCM', 'DXGE', 'DXJS', 'DXKW', 'DXLG', 'DXM', 'DXPE', 'DXPS', 'DXYN', 'DYAX', 'DYNT', 'DYSL', 'EA', 'EAC', 'EARS', 'EBAY', 'EBIO', 'EBIX', 'EBMT', 'EBSB', 'EBTC', 'ECHO', 'ECOL', 'ECPG', 'ECTE', 'ECYT', 'EDAP', 'EDGW', 'EDS', 'EDUC', 'EEFT', 'EEI', 'EEMA', 'EEME', 'EEML', 'EFII', 'EFOI', 'EFSC', 'EFUT', 'EGAN', 'EGBN', 'EGHT', 'EGLE', 'EGLT', 'EGOV', 'EGRW', 'EGRX', 'EGT', 'EHTH', 'EIGI', 'ELGX', 'ELNK', 'ELON', 'ELOS', 'ELRC', 'ELSE', 'ELTK', 'EMCB', 'EMCF', 'EMCG', 'EMCI', 'EMDI', 'EMEY', 'EMIF', 'EMITF', 'EMKR', 'EML', 'EMMS', 'EMMSP', 'ENDP', 'ENFC', 'ENG', 'ENOC', 'ENPH', 'ENSG', 'ENT', 'ENTA', 'ENTG', 'ENTR', 'ENVI', 'ENZN', 'ENZY', 'EOPN', 'EPAX', 'EPAY', 'EPIQ', 'EPRS', 'EPZM', 'EQIX', 'ERI', 'ERIC', 'ERIE', 'ERII', 'EROC', 'ERS', 'ERW', 'ESBF', 'ESBK', 'ESCA', 'ESCR', 'ESCRP', 'ESEA', 'ESGR', 'ESIO', 'ESLT', 'ESMC', 'ESPR', 'ESRX', 'ESSA', 'ESSX', 'ESXB', 'ESYS', 'ETFC', 'ETRM', 'EUFN', 'EVAL', 'EVAR', 'EVBS', 'EVEP', 'EVK', 'EVLV', 'EVOK', 'EVOL', 'EVRY', 'EWBC', 'EXA', 'EXAC', 'EXAS', 'EXEL', 'EXFO', 'EXLP', 'EXLS', 'EXPD', 'EXPE', 'EXPO', 'EXTR', 'EXXI', 'EYES', 'EZCH', 'EZPW', 'FALC', 'FANG', 'FARM', 'FARO', 'FAST', 'FATE', 'FB', 'FBIZ', 'FBMS', 'FBNC', 'FBNK', 'FBRC', 'FBSS', 'FCAP', 'FCBC', 'FCCO', 'FCCY', 'FCEL', 'FCFS', 'FCHI', 'FCLF', 'FCNCA', 'FCS', 'FCSC', 'FCTY', 'FCVA', 'FCZA', 'FCZAP', 'FDEF', 'FDIV', 'FDML', 'FDUS', 'FEIC', 'FEIM', 'FELE', 'FEMB', 'FES', 'FEUZ', 'FEYE', 'FFBC', 'FFBCW', 'FFHL', 'FFIC',];
  const [symbChange, setSymb] = useState("MSFT");
  let [stockChartXValues, setstockChartXValues] = useState();
  let [stockChartYValues, setstockChartYValues] = useState();

  const stockChange = (e) => {
    setSymb(e.target.value);
  };

  useEffect(() => {
    const fetchStock = () => {
      //   const pointerToThis = this;
      //   console.log(pointerToThis);
      const API_KEY = "HGJWFG4N8AQ66ICD";
      //   let StockSymbol = "AAME";
      let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbChange}&outputsize=compact&apikey=${API_KEY}`;
      let stockChartXValuesFunction = [];
      let stockChartYValuesFunction = [];

      fetch(API_Call)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          for (var key in data["Time Series (Daily)"]) {
            stockChartXValuesFunction.push(key);

            stockChartYValuesFunction.push(
              data["Time Series (Daily)"][key]["1. open"]
            );
          }
          setstockChartXValues(stockChartXValuesFunction);
          setstockChartYValues(stockChartYValuesFunction);
        });
    };
    fetchStock();
  }, [symbChange]);
  return (
    <div>
      <h1 className="stock">Stock Market</h1>
      <div className="input">
        <select onChange={stockChange}>
          {sym.map((values, i) => (
            <option value={values} key={i}>
              {values}{" "}
            </option>
          ))}
        </select>
      </div>
      <Plot
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{
          width: 1300,
          height: 600,
          title: "",
          plot_bgcolor: "black",
          // paper_bgcolor: "#FFF3",
        }}
      />
    </div>
  );
}
export default Stocks;
