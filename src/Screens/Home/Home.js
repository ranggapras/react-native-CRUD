import {View, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';
import {updateTodos} from './slicer';
import {getTodos, addTodos, deleteTodos} from './action';

const Home = () => {
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const {todos} = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const onSubmit = async () => {
    await dispatch(addTodos({description: todo}));
    dispatch(getTodos());
    setTodo('');
  };
  const onDelete = async id => {
    await dispatch(deleteTodos(id));
    dispatch(getTodos());
  };

  return (
    <View style={styles.card}>
      <Header />
      <ScrollView>
        {todos?.map((d, i) => {
          return (
            <Card
              key={i}
              description={d.description}
              status={d.status}
              onDelete={() => onDelete(d.id)}
              onUpdate={() => dispatch(updateTodos(i))}
            />
          );
        })}
      </ScrollView>
      <Input todo={todo} setTodo={setTodo} onSubmit={onSubmit} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});
