<?php
namespace App\Filament\Resources;

use App\Filament\Resources\HeroResource\Pages;
use App\Models\Hero;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class HeroResource extends Resource
{
    protected static ?string $model = Hero::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->label('Full Name'),
                TextInput::make('title')
                    ->required()
                    ->label('Professional Title'),
                Textarea::make('description')
                    ->required()
                    ->label('Short Bio Here'),
                FileUpload::make('image')
                    ->image()
                    ->imagePreviewHeight('100')
                    ->directory('hero-images')
                    ->disk('public')
                    ->label('Profile Image'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('Name')->searchable(),
                TextColumn::make('title')->label('Title')->searchable(),
                TextColumn::make('description')->label('Description')->limit(20),
                ImageColumn::make('image')->label('Profile Image')->disk('public')->circular(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListHeroes::route('/'),
            'create' => Pages\CreateHero::route('/create'),
            'edit'   => Pages\EditHero::route('/{record}/edit'),
        ];
    }
}
