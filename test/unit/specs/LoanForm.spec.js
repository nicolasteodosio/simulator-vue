import Vue from 'vue';
import LoanForm from '@/components/LoanForm';
import Loan from '../../../src/domain/loan/loan';

describe('LoanForm component', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(LoanForm);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('form').textContent)
      .to.equal('Loan simulator');
  });
  it('should render 2 extra components', () => {
    const Constructor = Vue.extend(LoanForm);
    const vm = new Constructor().$mount();
    expect(vm.$children.length).to.equal(2);
  });
  it('sets the correct default data', () => {
    const defaultData = LoanForm.data();
    expect(defaultData.loan).to.equal(new Loan());
  });
});
