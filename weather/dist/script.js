$("select").change(() => {
  show($('select').val())
});
let i = 0;
function show(local) {
  // console.log("local",local);
  $("thead tr").remove();
  $("tbody tr").remove();
  $.ajax({
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-426CF436-48EC-48F1-AB77-A10809A02F03",
    type: "get",
    dataType: 'json',
    success: function (res) {
      let data = res.records.location;
      const time0 = new Date(data[0].weatherElement[2].time[0].startTime);
      const time1 = new Date(data[0].weatherElement[2].time[1].startTime);
      const time2 = new Date(data[0].weatherElement[2].time[2].startTime);
      const timeText0 = `${time0.getFullYear()} / ${time0.getMonth() + 1} / ${time0.getDate()} / ${time0.getHours()}:00`;
      const timeText1 = `${time1.getFullYear()} / ${time1.getMonth() + 1} / ${time1.getDate()} / ${time1.getHours()}:00`;
      const timeText2 = `${time2.getFullYear()} / ${time2.getMonth() + 1} / ${time2.getDate()} / ${time2.getHours()}:00`;
      let js_title = `
        <tr>
          <th class="table-light">No.</th>
          <th class="table-success text-success fw-bold">地點</th>
          <th class="table-info text-primary time1">${timeText0}</th>
          <th class="table-warning text-info time2">${timeText1}</th>
          <th class="table-danger text-danger time3">${timeText2}</th>
        </tr>
      `;
      $("thead").append(js_title);
      if (i < 1) {
        i = i + 1;
        $.each(res.records.location, function (key, value) {
          let opt = `<option value="${value.locationName}" class="dropdown-item local">${value.locationName}</option>`;
          $("select").eq(0).append(opt);
        });
      }
      $.each(res.records.location, function (key, value) {
        // let opt = `<option value="${value.locationName}" class="dropdown-item local">${value.locationName}</option>`;
        // $("select").eq(0).append(opt);
        let js_html = `
          <tr>
            <td class="table-light text-black-50">${key + 1}</td>
            <td class="table-success text-success fw-bold">${value.locationName}</td>
            <td class="table-info text-primary time1">${value.weatherElement[2].time[0].parameter.parameterName}~${value.weatherElement[4].time[0].parameter.parameterName} &deg;${value.weatherElement[4].time[0].parameter.parameterUnit} | ${value.weatherElement[1].time[0].parameter.parameterName}% | <img src="./img/day/${value.weatherElement[0].time[0].parameter.parameterValue}.svg" title="${value.weatherElement[0].time[0].parameter.parameterName}" alt="" width="40px"> <span class="fw-bold">${value.weatherElement[3].time[0].parameter.parameterName}</span></td>
            <td class="table-warning text-info time2">${value.weatherElement[2].time[1].parameter.parameterName}~${value.weatherElement[4].time[1].parameter.parameterName} &deg;${value.weatherElement[4].time[1].parameter.parameterUnit} | ${value.weatherElement[1].time[1].parameter.parameterName}% | <img src="./img/day/${value.weatherElement[0].time[1].parameter.parameterValue}.svg" title="${value.weatherElement[0].time[1].parameter.parameterName}" alt="" width="40px"> <span class="fw-bold">${value.weatherElement[3].time[1].parameter.parameterName}</span></td>
            <td class="table-danger text-danger time3">${value.weatherElement[2].time[2].parameter.parameterName}~${value.weatherElement[4].time[2].parameter.parameterName} &deg;${value.weatherElement[4].time[2].parameter.parameterUnit} | ${value.weatherElement[1].time[2].parameter.parameterName}% | <img src="./img/day/${value.weatherElement[0].time[2].parameter.parameterValue}.svg" title="${value.weatherElement[0].time[2].parameter.parameterName}" alt="" width="40px"> <span class="fw-bold">${value.weatherElement[3].time[2].parameter.parameterName}</span></td>
          </tr>
        `;
        switch (local) {
          case "all":
            $("tbody").append(js_html);
            break;
          case "北部":
            if (
              value.locationName.includes("新北") ||
              value.locationName.includes("臺北") ||
              value.locationName.includes("基隆") ||
              value.locationName.includes("桃園") ||
              value.locationName.includes("新竹") ||
              value.locationName.includes("苗栗")
            ) {
              $("tbody").append(js_html);
            }
            break;
          case "中部":
            if (
              value.locationName.includes("臺中") ||
              value.locationName.includes("彰化") ||
              value.locationName.includes("雲林") ||
              value.locationName.includes("嘉義") ||
              value.locationName.includes("南投")
            ) {
              $("tbody").append(js_html);
            }
            break;
          case "南部":
            if (
              value.locationName.includes("臺南") ||
              value.locationName.includes("高雄") ||
              value.locationName.includes("屏東")
            ) {
              $("tbody").append(js_html);
            }
            break;
          case "東部":
            if (
              value.locationName.includes("宜蘭") ||
              value.locationName.includes("花蓮") ||
              value.locationName.includes("臺東")
            ) {
              $("tbody").append(js_html);
            }
            break;
          default:
            if (value.locationName == local) {
              $("tbody").append(js_html);
            }
            break;
        }
      })
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("jqXHR", jqXHR);
      console.log("textStatus", textStatus);
      console.log("errorThrown", errorThrown);
    }
  });
}
show("all");
let time = 0;
setInterval(() => {
  time = time + 1;
  switch (time) {
    case 1:
      $(".time1").removeClass("table-danger text-info").addClass("table-info text-primary");
      $(".time2").removeClass("table-info text-danger").addClass("table-warning text-info");
      $(".time3").removeClass("table-warning text-primary").addClass("table-danger text-danger");
      break;
    case 5:
      $(".time1").removeClass("table-info text-primary").addClass("table-warning text-danger");
      $(".time2").removeClass("table-warning text-info").addClass("table-danger text-primary");
      $(".time3").removeClass("table-danger text-danger").addClass("table-info text-info");
      break;
    case 10:
      $(".time1").removeClass("table-warning text-danger").addClass("table-danger text-info");
      $(".time2").removeClass("table-danger text-primary").addClass("table-info text-danger");
      $(".time3").removeClass("table-info text-info").addClass("table-warning text-primary");
      break;
    case 15:
      time = 0;
      break;
  }
}, 1000);