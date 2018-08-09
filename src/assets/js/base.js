var base = {
  _: function (query) {
    var res = [];
    if (document.querySelectorAll) {
      res = document.querySelectorAll(query);
    } else {
      var firstStyleSheet = document.styleSheets[0] || document.createStyleSheet();
      query = query.split(',');
      for (var i = 0, len = query.length; i < len; i++) {
        firstStyleSheet.addRule(query[i], 'Barret:Lee');
      }
      for (var i = 0, len = document.all.length; i < len; i++) {
        var item = document.all[i];
        item.currentStyle.Barret && res.push(item);
      }
      firstStyleSheet.removeRule(0);
    }
    if (res.item) { /* Fuck IE8 */
      var ret = [];
      for (var i = 0, len = res.length; i < len; i++) {
        ret.push(res.item(i));
      }
      res = ret;
    }
    return res;
  },
  scaleImg: function () {
    console.log(this)
    var imgs = this;
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].onload = function () {
        var _this = this;

        var getImgAttribute = function () {
          var boxW = parseFloat($(_this).parent().css('width').match(/\d+/g)); //区域宽度
          var boxH = parseFloat($(_this).parent().css('height').match(/\d+/g)); //区域高度
          var img = new Image();
          img.src = _this.src;
          var imgW = img.width;
          var imgH = img.height;

          var imgleft = -(boxH * imgW / imgH - boxW) / 2;
          var imgtop = -(boxW * imgH / imgW - boxH) / 2;
          ////console.log(boxW+'  '+boxH+' imgwidthheight '+imgW+'---'+imgH+' marginlefttop '+imgleft+'---'+imgtop);
          return {
            left: imgleft,
            top: imgtop,
            imgw: imgW,
            imgh: imgH,
            boxw: boxW,
            boxh: boxH
          }
        }
        var imgAttr = getImgAttribute();
        ////console.log(getImgAttribute())

        if (imgAttr.imgw > imgAttr.imgh) {
          this.style.height = '100%';
          if ($(this).width() < imgAttr.boxw) {
            this.style.width = '100%';
          } else {
            this.style.marginLeft = getImgAttribute().left + 'px';
          }

        } else {
          this.style.width = '100%';
          this.style.marginTop = getImgAttribute().top + 'px';
        }
      };
    }
  }
}
export default base;
