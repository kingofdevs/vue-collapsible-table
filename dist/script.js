let tree = {
  label: 'Year',
  values: ['2020', '2021', '2022'],
  classesExpanded: "year-header",
  classesCollapsed: "year-header",
  nodes: [
  {
    label: 'Revenues',
    values: ['37.00', '41.00', '47.00'],
    classesCollapsed: 'header1-collapsed',
    classesExpanded: 'header1',
    nodes: [
    {
      label: 'Sales Revenues',
      values: ['35.00', '38.00', '43.00'],
      classesExpanded: 'header2',
      nodes: [
      {
        label: 'Product 1',
        values: ['32.00', '33.00', '36.00'],
        nodes: [
        {
          label: 'Version 1',
          values: ['10.00', '9.00', '8.00'] },

        {
          label: 'Version 2',
          values: ['22.00', '24.00', '28.00'] }] },



      {
        label: 'Product 2',
        values: ['3.00', '5.00', '7.00'] }] },



    {
      label: 'Other Revenues',
      values: ['2.00', '3.00', '4.00'] }] },




  {
    label: 'Cost of Goods Sold',
    values: ['25.00', '27.00', '30.00'],
    classesCollapsed: 'header1-collapsed',
    classesExpanded: 'header1',
    nodes: [
    {
      label: 'Sheet metal',
      values: ['23.00', '24.00', '25.00'] },

    {
      label: 'Pipes',
      values: ['2.00', '3.00', '5.00'] }] },



  {
    label: 'Gross Profit',
    values: ['12.00', '14.00', '17.00'] },

  {
    label: 'Expenses',
    values: ['15.85', '17', '18.15'],
    classesCollapsed: 'header1-collapsed',
    classesExpanded: 'header1',
    nodes: [
    {
      label: 'Accounting',
      values: ['2.00', '2.00', '2.00'] },

    {
      label: 'Employee Wages',
      values: ['11.00', '12.00', '13.00'] },

    {
      label: 'Employee Payroll Taxes',
      values: ['1.65', '1.8', '1.95'] },

    {
      label: 'Rent',
      values: ['1.00', '1.00', '1.00'] },

    {
      label: 'Utilities',
      values: ['0.20', '0.20', '0.20'] }] },



  {
    label: 'Net Income Before Taxes',
    values: ['21.15', '24.00', '28.85'],
    classesCollapsed: 'header1-collapsed',
    classesExpanded: 'header1' },

  {
    label: 'Income Tax',
    values: ['4.23', '4.80', '5.77'],
    classesCollapsed: 'header1-collapsed',
    classesExpanded: 'header1' },

  {
    label: 'Net Income',
    values: ['16.92', '19.2', '23.08'],
    classesCollapsed: 'bottom-line',
    classesExpanded: 'header1' }] };




Vue.component('tree-menu', {
  template: '#tree-menu',
  props: ['nodes', 'label', 'values', 'depth', 'collapsible', 'expclass', 'colclass'],
  data() {
    return {
      showChildren: false || this.collapsible,
      collapsible: this.collapsible };

  },
  watch: {
    collapsible: function (newVal, oldVal) {
      this.showChildren = this.collapsible;
    } },

  computed: {
    customClass() {
      return this.showChildren ? this.expclass : this.colclass;
    },
    iconObject() {
      return !this.nodes ? 'fa' : this.showChildren ? 'fa fa-chevron-down' : 'fa fa-chevron-right';
    },
    labelClasses() {
      return { 'has-children': this.nodes };
    },
    indent() {
      return { transform: `translate(${this.depth * 22}px)` };
    },
    labelTr() {
      return !this.showChildren && this.nodes && 'label-tr';
    },
    tdWrapper() {
      return this.showChildren && this.depth == 0 ? 'hidden' : 'td-wrapper';
    },
    title() {
      return this.showChildren && this.depth == 0 ? 'title' : '';
    } },

  methods: {
    toggleChildren() {
      this.showChildren = this.nodes !== undefined && !this.showChildren;
    } } });



new Vue({
  el: '#app',
  data() {
    return {
      tree,
      isShownAll: false };

  },
  methods: {
    toggleExpanded(e) {
      this.isShownAll = !this.isShownAll;
    } } });