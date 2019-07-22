<template>
  <div>
    <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" />
    <van-count-down class="timer" :time="time" format="您还剩余 mm 分 ss 秒支付订单" />
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />

    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList1 = true" />
    <van-popup v-model="showList1" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <van-cell-group>
      <van-field
        v-model="message"
        label="专属优惠码"
        type="textarea"
        placeholder="点击填写专属优惠码"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell class="order1" v-model="checked" title="M豆抵扣?    满1000个可用" />
    </van-cell-group>
    <van-cell-group>
      <van-field
        class="order1"
        v-model="message"
        label="买家留言"
        type="textarea"
        placeholder="请输入您的留言"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-submit-bar
      label="待支付:"
      :decimal-length="0"
      :price="0"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  name: "Order",
  data() {
    return {
      message: "",
      checked: false,
      time: 15 * 60 * 1000,
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      showList1: false,
      list: [
        {
          name: "名字",
          tel: "手机号",
          id: 0
        }
      ],
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },
  methods: {
    onSubmit() {
      this.$router.push("/payment");
    },
    onChange(index) {
      this.showList1 = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};
</script>
<style>
.timer {
  font-size: 12px;
  background: pink;
}
.order1 {
  font-size: 12px;
  color: brown;
}
</style>
