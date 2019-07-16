import { I18n } from 'react-redux-i18n';

export function quizGenerator(path) {
    const quizType = path.split('/')[1];
    let quiz = {
        "quizTitle": I18n.t(quizType + 'Test.name'),
        "quizSynopsis": I18n.t('common.description'),
        "questions": I18n.t(quizType + 'Test.questions')
    };
    let questions = [];
    for (let key in quiz.questions){
        questions.push(quiz.questions[key]);
    }
    quiz.questions = questions.map(item => {
        let answers = [];
        for(let key in item.answers) {
            answers.push(item.answers[key]);
        }
        item.answers = answers;
        return item;
    })    
    return quiz;
};