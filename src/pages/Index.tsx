import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const materials = [
    {
      id: 1,
      title: "Грамматика: Present Perfect",
      level: "Intermediate",
      type: "Урок",
      duration: "45 мин",
      description: "Изучаем использование Present Perfect в современном английском языке с примерами и упражнениями."
    },
    {
      id: 2,
      title: "Словарь: Business English",
      level: "Advanced",
      type: "Словарь",
      duration: "30 мин",
      description: "Ключевые термины и фразы для делового общения на английском языке."
    },
    {
      id: 3,
      title: "Аудирование: BBC News",
      level: "Upper-Intermediate",
      type: "Аудио",
      duration: "20 мин",
      description: "Развиваем навыки восприятия речи на слух с помощью новостных сюжетов BBC."
    },
    {
      id: 4,
      title: "Произношение: American Accent",
      level: "All Levels",
      type: "Практика",
      duration: "35 мин",
      description: "Техники и упражнения для освоения американского произношения."
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Эссе: My Future Career",
      dueDate: "25 сентября",
      status: "active",
      points: 50
    },
    {
      id: 2,
      title: "Тест: Irregular Verbs",
      dueDate: "22 сентября",
      status: "pending",
      points: 30
    },
    {
      id: 3,
      title: "Диалог: В ресторане",
      dueDate: "Завершено",
      status: "completed",
      points: 40
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">English Tutor</h1>
                <p className="text-sm text-gray-600">Персональное изучение английского</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#materials" className="text-gray-700 hover:text-primary transition-colors">Материалы</a>
              <a href="#assignments" className="text-gray-700 hover:text-primary transition-colors">Задания</a>
              <Button>Связаться</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                🚀 Новый подход к изучению языка
              </Badge>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Изучай английский с
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> персональным репетитором</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Индивидуальные занятия, современные материалы и эффективные методики для быстрого достижения ваших целей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на урок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Современные методики обучения и персональный подход к каждому ученику
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Программа обучения адаптируется под ваш уровень, цели и темп изучения
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-white" />
                </div>
                <CardTitle>Современные материалы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Актуальные учебные материалы, интерактивные упражнения и мультимедийный контент
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <CardTitle>Быстрые результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Эффективные методики позволяют достичь заметного прогресса уже через месяц
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials Library */}
      <section id="materials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Библиотека материалов</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Обширная коллекция учебных материалов для всех уровней владения языком
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="grammar">Грамматика</TabsTrigger>
              <TabsTrigger value="vocabulary">Словарь</TabsTrigger>
              <TabsTrigger value="speaking">Говорение</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {materials.map((material, index) => (
                  <Card key={material.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {material.level}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {material.type}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{material.title}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-2">
                            <Icon name="Clock" size={14} />
                            {material.duration}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="BookmarkPlus" size={16} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{material.description}</p>
                      <Button className="w-full">
                        <Icon name="Play" size={16} className="mr-2" />
                        Начать изучение
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Assignments Section */}
      <section id="assignments" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Домашние задания</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Отслеживайте прогресс и выполняйте задания для закрепления изученного материала
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {assignments.map((assignment, index) => (
                <Card key={assignment.id} className="hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          assignment.status === 'completed' ? 'bg-secondary' :
                          assignment.status === 'active' ? 'bg-accent' : 'bg-gray-300'
                        }`} />
                        <div>
                          <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                          <p className="text-sm text-gray-600">Срок: {assignment.dueDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          {assignment.points} баллов
                        </Badge>
                        {assignment.status === 'completed' ? (
                          <Badge variant="secondary">
                            <Icon name="Check" size={12} className="mr-1" />
                            Выполнено
                          </Badge>
                        ) : assignment.status === 'active' ? (
                          <Button size="sm">
                            Продолжить
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            Начать
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы начать изучение английского?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Запишитесь на бесплатное пробное занятие и оцените эффективность нашей методики
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Бесплатный урок
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <span className="font-semibold text-gray-900">English Tutor</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2024 English Tutor. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;