import Vue from 'vue';
import Home from '@/components/Home';
import Loan from '../../../src/domain/loan/loan';

describe('Home component', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Loan simulator');
  });
  it('should render 2 extra components', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$children.length).to.equal(2);
  });
  it('sets the correct default data', () => {
    const defaultData = Home.data();
    expect(defaultData.loan).to.equal(new Loan());
  });
});
