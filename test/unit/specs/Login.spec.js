import Vue from 'vue';
import Login from '@/components/Login';

describe('Login component', () => {
  it('should render correct contents', () => {
    const vm = new Vue(Login).$mount();
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Loan simulator');
  });
});
