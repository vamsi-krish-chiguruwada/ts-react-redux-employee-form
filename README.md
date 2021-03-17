# ts-react-redux-employee-form

https://vamsi-krish-chiguruwada.github.io/ts-react-redux-employee-form.io/


![image](https://user-images.githubusercontent.com/46754181/111542690-127ea300-8798-11eb-881a-af4ad4972813.png)


2nd commit:
  erroe at onSubmit event type
  C:/Users/vamsi.krishna/Desktop/workplace/BAKKT/Tasks/Arun/redux-ts-react-emp-task/src/Components/empForm/empForm.tsx
TypeScript error in C:/Users/vamsi.krishna/Desktop/workplace/BAKKT/Tasks/Arun/redux-ts-react-emp-task/src/Components/empForm/empForm.tsx(20,15):
Type '(event: FormEvent<HTMLInputElement>) => void' is not assignable to type 'FormEventHandler<HTMLFormElement>'.
  Types of parameters 'event' and 'event' are incompatible.
    Type 'FormEvent<HTMLFormElement>' is not assignable to type 'FormEvent<HTMLInputElement>'.
      Type 'HTMLFormElement' is missing the following properties from type 'HTMLInputElement': accept, align, alt, checked, and 45 more.  TS2322

    18 |         <div className="formContainer">
    19 |         <h1>fill employee details</h1>
  > 20 |         <form onSubmit={this.props.handleSubmit}>
       |               ^
    21 |           <input
    22 |             required
    23 |             type="text
      



In EmpForm.tsx

![image](https://user-images.githubusercontent.com/46754181/111534195-ba42a380-878d-11eb-8390-94bcddce5eb6.png)

In App.tsx

![image](https://user-images.githubusercontent.com/46754181/111534445-01c92f80-878e-11eb-948c-b0374ccb45da.png)
